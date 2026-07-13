# Answer Key — Rio's Original Manual Analysis

**Don't read this until Step 3 of the lab.** These are the true, computed results for `attendance.csv` + `outcomes.csv` (40 participants, one quarter, three months). Use them to grade what AI produces — not to feed AI the answer.

## 1. Monthly attendance trend (all 40 participants)

| Month | Avg. attendance |
|---|---|
| January | 60.4% |
| February | 66.9% |
| March | 77.5% |

Attendance rose steadily across the quarter, about +17 points from January to March.

## 2. Overall correlation between attendance and employment

Correlation coefficient (avg. quarterly attendance vs. employed after program): **r ≈ 0.21** — a real but modest positive relationship. Participants in the top half of attendance were employed at **76%**, vs. **60%** for the bottom half. This is the headline finding a first-pass analysis should surface: yes, more consistent attendance is associated with better job placement outcomes.

## 3. The critical insight: program type

There are two program types in the data:

- **Job Training Only** (26 participants)
- **Job Training + Housing** (14 participants — combined housing assistance and job placement support)

|  | Avg. attendance | Employment rate | Correlation (attendance↔employment), within group |
|---|---|---|---|
| Job Training Only | 73.5% | 69.2% | r ≈ 0.41 |
| Job Training + Housing | 58.5% | 71.4% | r ≈ 0.42 |

**The insight Rio's first-pass analysis missed, and a naive AI pass tends to miss too:** Housing-track participants attend at a noticeably *lower* rate (58.5% vs. 73.5%) — likely because housing instability makes consistent attendance harder — yet they end up employed at a *slightly higher* rate than Job-Training-Only participants. Housing support appears to compensate for lower attendance rather than participants simply disengaging. Within *each* program type, attendance still correlates positively with employment (r ≈ 0.4 in both) — the relationship isn't reversed, it's just confounded by program type if you only look at the pooled numbers. A report that only states the overall r ≈ 0.21 correlation, without breaking out program type, understates how strong the attendance→employment link really is within each track, and completely misses that the Housing program is achieving comparable outcomes with a structurally harder population.

**What this means for grading AI's output:** if AI's first answer only reports the pooled correlation and doesn't mention program type at all, that's the exact gap Rio hit. It's not wrong, it's incomplete — the fix is telling AI explicitly to break results out by program type.

## 4. Enrollment date / cohort analysis — the trap

`outcomes.csv` has an `enrollment_date` column, but it's **blank for 65% of rows on purpose.** For those rows, the actual enrollment info exists only as free text in the `notes` field, e.g.:

> "Enrolled in January, referred by county VA office."
> "Started program January 14. Prior military police background."

True enrollment-month distribution (reconstructed from both the clean column and the notes field):

| Month enrolled | Participants |
|---|---|
| January | 17 |
| February | 17 |
| March | 6 |

**What to check for:** Did AI notice the `enrollment_date` column was mostly empty and only compute cohort stats off the ~35% of rows that had a clean value — silently, without flagging it? Or did it recognize it needed to extract dates from `notes` to get a real answer, and either do that extraction or ask you whether it should?

Rio's real conclusion here: **AI can help extract structured dates from messy free text, but it needs to be explicitly told the enrollment data is incomplete/embedded in notes** — otherwise it will quietly compute cohort stats from a biased 35% subsample (skewed toward whichever participants happened to get a clean date typed in) and present them as if they covered everyone. This is not a task to fully delegate without a human spot-check of the extraction.

## Summary of what a good final report should contain

1. Attendance rose ~17 points across the quarter (60.4% → 77.5%).
2. Attendance and employment are positively correlated (r ≈ 0.2 pooled, ≈ 0.4 within each program type).
3. Housing-track participants attend less (58.5% vs 73.5%) but are employed at a comparable-or-higher rate (71.4% vs 69.2%) — housing support appears to offset lower attendance.
4. Enrollment-date/cohort analysis is unreliable without extracting dates from the `notes` field first — flag this as a data-quality caveat, don't silently compute from the clean column alone.
