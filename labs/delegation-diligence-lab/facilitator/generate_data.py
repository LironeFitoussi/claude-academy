"""
Generates the messy raw dataset AND the ground-truth answer key for the
Delegation & Diligence Loop lab (Valley Veterans Services / Rio scenario).

Run once to produce:
  - attendance.csv   (messy, mixed formats)
  - outcomes.csv     (messy, enrollment date buried in free-text notes for some rows)
  - answer_key.json  (true computed stats, used to write ANSWER_KEY.md)

Deterministic (seeded) so re-running reproduces the same files.
"""
import csv
import json
import random
import sys

SEED = int(sys.argv[1]) if len(sys.argv) > 1 else 15
random.seed(SEED)

MONTHS = ["January", "February", "March"]
PROGRAM_TYPES = ["Job Training Only", "Job Training + Housing"]

FIRST_NAMES = ["James","Maria","Robert","Linda","Michael","Patricia","David","Barbara",
               "William","Elizabeth","Richard","Jennifer","Joseph","Susan","Thomas","Jessica",
               "Charles","Karen","Christopher","Nancy","Daniel","Lisa","Matthew","Betty",
               "Anthony","Sandra","Mark","Ashley","Paul","Kimberly"]

NOTE_TEMPLATES_WITH_DATE = [
    "Enrolled in {month_name}, referred by county VA office.",
    "Started program {month_name} {day}. Prior military police background.",
    "Intake completed {month_name} {day}, veteran of 3 tours.",
    "Joined cohort in {month_name}. Housing voucher pending at intake.",
    "Began services {month_name} {day} after discharge orientation.",
]
NOTE_TEMPLATES_NO_DATE = [
    "Prefers morning sessions.",
    "Referred by peer support group.",
    "Has reliable transportation.",
    "Requested resume workshop.",
    "",
]

N = 40
JOB_ONLY_N = 26
HOUSING_N = N - JOB_ONLY_N

participants = []
pid = 1
for i in range(JOB_ONLY_N):
    participants.append({"id": pid, "name": f"{FIRST_NAMES[(pid-1) % len(FIRST_NAMES)]} {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[pid % 26]}.",
                          "program_type": "Job Training Only"})
    pid += 1
for i in range(HOUSING_N):
    participants.append({"id": pid, "name": f"{FIRST_NAMES[(pid-1) % len(FIRST_NAMES)]} {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[pid % 26]}.",
                          "program_type": "Job Training + Housing"})
    pid += 1

random.shuffle(participants)
for i, p in enumerate(participants):
    p["id"] = i + 1  # renumber after shuffle so program type isn't sorted

# ---- attendance ----
# Job Training Only: rising trend, higher overall (~0.65 -> 0.82)
# Job Training + Housing: lower attendance (housing instability), flatter (~0.55 -> 0.63)
attendance_rows = []
true_attendance = {}  # id -> {month: pct}
for p in participants:
    true_attendance[p["id"]] = {}
    base = 0.65 if p["program_type"] == "Job Training Only" else 0.55
    trend = 0.09 if p["program_type"] == "Job Training Only" else 0.045
    for m_idx, month in enumerate(MONTHS):
        mean_pct = min(0.97, base + trend * m_idx)
        pct = max(0.10, min(1.0, random.gauss(mean_pct, 0.09)))
        possible = 12
        attended = round(pct * possible)
        true_attendance[p["id"]][month] = attended / possible

        # messiness: vary format
        fmt = random.choice(["frac", "pct_str", "pct_str", "blank_possible"])
        if fmt == "frac":
            val = f"{attended}/{possible}"
        elif fmt == "pct_str":
            val = f"{round(attended/possible*100)}%"
        else:
            val = "" if random.random() < 0.08 else f"{attended}/{possible}"

        attendance_rows.append({
            "participant_id": p["id"],
            "month": month if random.random() > 0.05 else month.lower(),
            "sessions": val,
        })

# ---- outcomes ----
# Employment probability driven by average attendance, PLUS a program-type
# boost for Housing participants (stability from housing support helps job
# retention even though their attendance is lower) -> this is the "critical
# insight" Rio's manual analysis found and AI initially misses.
outcome_rows = []
true_employment = {}
true_enrollment_month = {}
for p in participants:
    avg_att = sum(true_attendance[p["id"]].values()) / 3
    boost = 0.15 if p["program_type"] == "Job Training + Housing" else 0.0
    prob_employed = max(0.05, min(0.95, avg_att * 0.9 + boost))
    employed = random.random() < prob_employed
    true_employment[p["id"]] = employed

    enroll_month_idx = random.choice([0, 0, 1, 1, 2])  # Jan/Feb heavier
    enroll_month = MONTHS[enroll_month_idx]
    true_enrollment_month[p["id"]] = enroll_month
    day = random.randint(1, 28)

    has_date_in_notes = random.random() < 0.6  # ~60% only in free text
    if has_date_in_notes:
        note = random.choice(NOTE_TEMPLATES_WITH_DATE).format(month_name=enroll_month, day=day)
        enrollment_date_col = ""
    else:
        note = random.choice(NOTE_TEMPLATES_NO_DATE)
        enrollment_date_col = f"{enroll_month_idx+1}/{day}/2025"

    employed_str = random.choice(["Y", "Yes", "yes", "N", "No", "no"]) if False else None
    if employed:
        employed_str = random.choice(["Y", "Yes", "yes"])
        placement_day = random.randint(1, 28)
        placement_month_idx = min(2, enroll_month_idx + random.choice([0, 1, 1, 2]))
        placement_date = f"{placement_month_idx+1}/{placement_day}/2025"
    else:
        employed_str = random.choice(["N", "No", "no"])
        placement_date = ""

    outcome_rows.append({
        "participant_id": p["id"],
        "name": p["name"],
        "program_type": p["program_type"] if random.random() > 0.1 else p["program_type"].upper(),
        "employed_after_program": employed_str,
        "placement_date": placement_date,
        "enrollment_date": enrollment_date_col,
        "notes": note,
    })

# ---- write CSVs ----
with open("attendance.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["participant_id", "month", "sessions"])
    w.writeheader()
    w.writerows(attendance_rows)

with open("outcomes.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=["participant_id", "name", "program_type",
                                       "employed_after_program", "placement_date",
                                       "enrollment_date", "notes"])
    w.writeheader()
    w.writerows(outcome_rows)

# ---- compute ground truth for answer key ----
def pct(x):
    return round(x * 100, 1)

overall_by_month = {m: round(sum(true_attendance[p["id"]][m] for p in participants) / N * 100, 1)
                     for m in MONTHS}

job_only_ids = [p["id"] for p in participants if p["program_type"] == "Job Training Only"]
housing_ids = [p["id"] for p in participants if p["program_type"] == "Job Training + Housing"]

def avg_attendance(ids):
    return round(sum(sum(true_attendance[i].values()) / 3 for i in ids) / len(ids) * 100, 1)

def employment_rate(ids):
    return round(sum(1 for i in ids if true_employment[i]) / len(ids) * 100, 1)

# correlation: avg attendance vs employed(0/1), overall
avg_atts = [sum(true_attendance[p["id"]].values()) / 3 for p in participants]
emp_bin = [1 if true_employment[p["id"]] else 0 for p in participants]
n = len(participants)
mean_a = sum(avg_atts) / n
mean_e = sum(emp_bin) / n
cov = sum((avg_atts[i] - mean_a) * (emp_bin[i] - mean_e) for i in range(n)) / n
sd_a = (sum((a - mean_a) ** 2 for a in avg_atts) / n) ** 0.5
sd_e = (sum((e - mean_e) ** 2 for e in emp_bin) / n) ** 0.5
correlation = round(cov / (sd_a * sd_e), 2) if sd_a and sd_e else None

def corr_for(ids):
    a = [sum(true_attendance[i].values()) / 3 for i in ids]
    e = [1 if true_employment[i] else 0 for i in ids]
    m = len(ids)
    ma, me = sum(a) / m, sum(e) / m
    cv = sum((a[k] - ma) * (e[k] - me) for k in range(m)) / m
    sa = (sum((x - ma) ** 2 for x in a) / m) ** 0.5
    se = (sum((x - me) ** 2 for x in e) / m) ** 0.5
    return round(cv / (sa * se), 2) if sa and se else None

corr_job_only = corr_for(job_only_ids)
corr_housing = corr_for(housing_ids)

# high vs low attendance tiers (overall, ignoring program type) employment rate
paired = sorted(zip([p["id"] for p in participants], avg_atts), key=lambda x: x[1])
low_half = [pid for pid, a in paired[:15]]
high_half = [pid for pid, a in paired[15:]]

enrollment_month_counts = {m: sum(1 for p in participants if true_enrollment_month[p["id"]] == m) for m in MONTHS}

answer_key = {
    "n_participants": N,
    "job_only_n": JOB_ONLY_N,
    "housing_n": HOUSING_N,
    "overall_attendance_by_month_pct": overall_by_month,
    "avg_attendance_job_only_pct": avg_attendance(job_only_ids),
    "avg_attendance_housing_pct": avg_attendance(housing_ids),
    "employment_rate_job_only_pct": employment_rate(job_only_ids),
    "employment_rate_housing_pct": employment_rate(housing_ids),
    "overall_correlation_attendance_employment": correlation,
    "correlation_job_only": corr_job_only,
    "correlation_housing": corr_housing,
    "employment_rate_low_attendance_half_pct": round(sum(1 for i in low_half if true_employment[i]) / len(low_half) * 100, 1),
    "employment_rate_high_attendance_half_pct": round(sum(1 for i in high_half if true_employment[i]) / len(high_half) * 100, 1),
    "enrollment_month_counts": enrollment_month_counts,
    "pct_enrollment_date_only_in_notes": round(sum(1 for r in outcome_rows if r["enrollment_date"] == "") / N * 100, 1),
}

with open("answer_key.json", "w") as f:
    json.dump(answer_key, f, indent=2)

print(json.dumps(answer_key, indent=2))
