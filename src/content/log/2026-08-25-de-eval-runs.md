---
title: first eval runs, benchmark saturated at 1.00 F1
date: 2026-08-25
system: dispute-engine
lines:
  - 78 haiku calls · ~$0.55
  - macro-F1 1.00 ← saturated · winnability 0.43 · ECE 0.27
  - → harder templates, not prompt tuning
---

Built the generator (week 1) and the harness (week 4) early, because the eval is the part that matters.

1. **The first failures were a data bug.** Two cases paired a gym membership with "tracking says delivered", because merchants were picked independently of the claim. Fixed with `merchant_kinds` on each template. Tuning the prompt against that corpus would have meant optimizing against noise.
2. **The benchmark saturated.** 100% macro F1 on every tier, because the templates are too lexically distinct. `test_benchmark_still_discriminates` xfails on purpose to keep that visible.
3. **Classification is solved. Judgment isn't.** Winnability accuracy is 43%.
4. **Calibration is off in the safe direction.** ECE 0.27 and every bin is negative: the model says 0.74 and is right 100% of the time. A naive confidence-threshold router would escalate cases that never needed Opus and spend money for no accuracy gain.
