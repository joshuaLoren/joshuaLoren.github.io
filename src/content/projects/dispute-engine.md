---
title: Dispute Engine
summary: Chargeback triage with an LLM, built around an eval harness. Source goes public when the curriculum wraps.
status: In progress
stack: [Python, Pydantic, Claude API, FastAPI]
order: 1
---

Given a dispute, the system classifies it, judges whether it's worth fighting, and lists the evidence required and what's missing. I'm using it to work through the AI-engineering stack over ten weeks.

## How it works

```
DisputeCase ──▶ classify (versioned prompt) ──▶ Classification
                   │
                   └─ response cache, per-model request shaping
```

- `dispute classify` turns one case into a validated `Classification`.
- `dispute generate` builds a synthetic corpus offline. Cases are generated from a chosen dispute family, so every case has a gold label without hand-labeling. 200 cases across three difficulty tiers. 11% are flagged as having a contestable label and kept out of headline numbers.
- `dispute eval` reports per-class precision, recall and F1, a confusion matrix, calibration (ECE), a per-tier breakdown, and a failure list. CI gates read the saved scorecard, so they need no API key.
- `dispute serve` is a local review UI that compares models side by side and highlights fields that differ.

## Current results

| Metric | Value | Reading |
|---|---|---|
| Classification macro F1 | 1.00 | Benchmark is too easy |
| Winnability accuracy | 0.43 | The real problem |
| Calibration error (ECE) | 0.27 | Underconfident in every bin |
