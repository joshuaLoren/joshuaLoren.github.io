---
title: Dispute Engine
tagline: Chargeback triage with an LLM, measured by a real eval harness.
status: building
stack: [Python, uv, Pydantic, Claude API, FastAPI]
metric: winnability acc 0.43
order: 2
---

A dispute comes in. The system classifies it, judges whether it's worth fighting, and lists the evidence required and missing. It doubles as a ten-week AI-engineering curriculum. Log entries below are the running record.

## Pipeline

```
DisputeCase (pydantic) ─▶ classify (versioned prompt) ─▶ Classification (validated)
                                │
                     disk response cache · per-model call shaping
```

## Pieces

- `dispute classify <case.json>`: one case to a validated `Classification`.
- `dispute generate`: offline, label-first synthetic corpus. 200 cases, 3 difficulty tiers, 11% flagged `label_is_contestable` and excluded from headline numbers.
- `dispute eval`: per-class P/R/F1, confusion matrix, calibration (ECE), per-tier breakdown, failure list. Metrics are pure functions with unit tests. CI gates read the saved scorecard, so they need no API key.
- `dispute serve`: local FastAPI review UI with side-by-side model comparison. Fields that differ are highlighted.

## Current scorecard

| metric | value | read |
|---|---|---|
| macro F1 (classification) | 1.00 | saturated: benchmark too easy |
| winnability accuracy | 0.43 | the real problem |
| ECE | 0.27 | underconfident in every bin |
