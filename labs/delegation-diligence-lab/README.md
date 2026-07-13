# Lab: The Delegation & Diligence Loop

**Scenario:** You are Rio, program director at Valley Veterans Services. Every quarter you analyze program attendance alongside employment outcomes — participation rates, monthly trends, and whether attendance predicts job placement. It normally takes hours of manual spreadsheet work.

This quarter, you're testing whether AI can take over the analysis. You already did this analysis by hand last quarter, so **you know what the right answer looks like.** That's the whole trick: test AI against a problem you can already grade.

This is the **delegation diligence loop**:

1. Pick a specific analytical task you want to delegate.
2. Find past data where you already know the answer.
3. Work with AI to reproduce that answer, checking each response against what you know.
4. Note gaps — things AI got wrong, or got right only once you gave it more context.
5. Refine your prompt and test again.
6. If AI converges on the right answer with reasonable guidance, you now have a validated approach for future quarters. If it can't get there, you've learned this task isn't safe to delegate (yet).

## What's in this folder

| File | What it is |
|---|---|
| `attendance.csv` | Raw, messy monthly attendance data for 40 participants (Jan–Mar). Sessions recorded inconsistently — sometimes `"7/12"`, sometimes `"58%"`, sometimes blank. |
| `outcomes.csv` | Raw, messy employment outcome data — program type, employment status (`Y`/`Yes`/`yes`/`N`/`No`/`no`), placement date, and a free-text `notes` field. |
| `ANSWER_KEY.md` | The correct conclusions Rio already reached last quarter, doing this by hand. **Don't open this until step 3 below.** |

Notice: `attendance.csv` and `outcomes.csv` are two separate files, joined by `participant_id` — just like Rio's real data. You (or the AI) will need to merge them.

## How to run the lab

### Step 1 — Set up your test

Open a chat with Claude (or your AI tool of choice). Upload or paste in `attendance.csv` and `outcomes.csv`. Don't look at `ANSWER_KEY.md` yet — the point is to see what AI produces cold, the same way Rio did.

### Step 2 — First attempt

Write your own first prompt — don't overthink it, write it the way you'd naturally ask a data analyst on your team. Rio's own first prompt named three things: what he wanted analyzed (participation patterns across the three months), what he wanted compared (attendance levels vs. employment success), and his specific hypothesis (whether *consistent* attendance predicts better job placement). Try covering those three angles in your own words.

Send it as-is — no extra hints about program type or data quirks. The gaps you find in the response are exactly what step 3 is for.

Write down (on paper or in a notes doc) what AI concludes: the monthly attendance trend, the overall correlation it finds, and anything it flags as notable.

### Step 3 — Check against the answer key

Now open `ANSWER_KEY.md`. Compare AI's output line by line against Rio's real findings. Ask yourself:

- Did AI get the monthly attendance trend right?
- Did AI get the overall correlation direction and rough size right?
- Did AI catch the program-type nuance on its own — or miss it, the way it did for Rio?
- Did AI do anything with the `notes` field, or the mostly-blank `enrollment_date` column?

Write down what worked and what didn't. This is your diligence log.

### Step 4 — Refine and retest

Rio's second prompt, once he noticed AI had missed something, was roughly:

> "Can you redo this, but pay special attention to program type? We have two program types in this data — compare attendance and employment outcomes between them, not just overall."

Run that. Check the new output against `ANSWER_KEY.md` again. Did it find the insight this time?

### Step 5 — Push on the hard part

Rio's third prompt tested something the data doesn't make easy:

> "Can you also look at this based on when participants enrolled?"

Most of the `enrollment_date` column is blank on purpose — the real date is often buried in the `notes` free-text field instead (e.g. *"Enrolled in January, referred by county VA office."*). Watch closely: does AI notice the column is mostly empty and go extract dates from `notes`? Does it say anything about the data being incomplete, or does it just silently compute an answer from the 35% of rows that do have a clean date? Check `ANSWER_KEY.md` for what Rio concluded about this specific risk.

### Step 6 — Write your diligence log

Fill this out based on what you saw:

```
TASK: Quarterly attendance/employment analysis

ATTEMPT 1 (no extra guidance)
- What AI got right:
- What AI got wrong or missed:

ATTEMPT 2 (asked to consider program type)
- Did refining the prompt fix the gap? Y/N
- What I'll need to say every quarter going forward:

ATTEMPT 3 (enrollment/cohort question)
- Did AI recognize the data limitation, or guess past it?
- Is this something I can delegate, or does it need my own extraction/cleanup first?

OVERALL VERDICT
- Can I delegate this task next quarter? Under what conditions?
- What do I still need to check myself every time, even with a good prompt?
```

## The point

You're not grading AI in the abstract. You're building a **validated, reusable prompt** for a task you actually do — and a clear-eyed list of what it still gets wrong, so you know exactly where to keep your own eyes on the numbers. That's what makes delegation trustworthy: not blind faith, and not blanket refusal, but a tested track record on your own data.

Validation builds confidence — it doesn't remove your responsibility for the final number. Whatever you conclude here, you're still the one who has to be able to explain and stand behind the report.
