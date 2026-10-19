---
title: haiku vs opus diverge on judgment, not classification
date: 2026-08-25
system: dispute-engine
lines:
  - 'trap case: filed visa 10.4 "fraud", narrative = cancelled subscription'
  - both → subscription_canceled @ 0.85
  - haiku likely_winnable / opus uncertain (n=1, hypothesis only)
---

The trap case is filed as Visa 10.4 "fraud", but the narrative describes a cancelled subscription. Both models ignored the filed code and said `subscription_canceled` at 0.85 confidence.

| | Haiku 4.5 | Opus 5 |
|---|---|---|
| winnability | likely_winnable | uncertain |
| required evidence | 3 items | 5 items |
| missing evidence | 2 | 3 |

Opus asked for the customer communication log and usage logs. Haiku didn't. If that holds across the corpus, the cheap model is systematically over-optimistic about winnability. That's what the confusion matrix should catch, and it would set the routing threshold.

Open question for the labeling guide: neither model flagged a contradiction-laden $249 case for human review. What should trigger `needs_human_review`?
