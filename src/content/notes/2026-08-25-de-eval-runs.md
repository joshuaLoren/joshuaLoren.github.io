---
title: My first benchmark scored 100%, which meant it was broken
date: 2026-08-25
summary: Two eval runs for $0.55 turned up a data bug, a saturated benchmark, 43% accuracy on winnability, and underconfident calibration.
project: dispute-engine
---

78 Haiku calls, about $0.55 in total.

**The first failures were a data bug.** Two cases paired a gym membership with "tracking shows delivered," because the generator picked merchants independently of the claim. The model was being marked wrong for a sensible answer. Each template now declares which merchant types fit it. Tuning the prompt against the old corpus would have meant fitting noise.

**Then the benchmark saturated.** Classification hit 1.00 macro F1 on every difficulty tier because the templates are too easy to tell apart. A test now fails on purpose until the benchmark discriminates again. The fix is harder cases, not a better prompt.

**Winnability accuracy is 43%.** The model reliably knows what kind of dispute it's looking at. It doesn't know whether the dispute is worth fighting, and that's the decision a payments team actually needs.

**Calibration is off in the safe direction.** ECE is 0.27, and the model is underconfident in every bin: when it says 0.74 it's right every time. A router that escalates low-confidence cases to a larger model would escalate cases that never needed it and spend money for no gain in accuracy.
