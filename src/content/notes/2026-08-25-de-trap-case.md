---
title: Haiku and Opus agreed on the category and disagreed on whether to fight
date: 2026-08-25
summary: On a mislabeled "fraud" chargeback, both models found the real category. Only Opus asked for the evidence that would decide the case.
project: dispute-engine
---

The test case is filed as Visa 10.4 (fraud), but the narrative describes a cancelled subscription. Both models ignored the filed code and answered `subscription_canceled` at 0.85 confidence.

They differed on judgment:

| | Haiku 4.5 | Opus 5 |
|---|---|---|
| Winnability | likely winnable | uncertain |
| Required evidence | 3 items | 5 items |
| Missing evidence | 2 | 3 |

Opus asked for the customer communication log and usage logs. Haiku didn't. This is one case, so it's a hypothesis, not a result. If it holds across the corpus, the cheaper model is systematically too optimistic about winnability, which would set the threshold for routing cases to the larger model.

Neither model flagged a $249 case full of contradictions for human review. The labeling guide needs a rule for what should trigger `needs_human_review`.
