---
title: "Dispute Engine log #1: the benchmark scored 100%, and that was the bad news"
description: The first weeks of building a chargeback-triage system in public, and four findings from my first eval runs.
date: 2026-10-19
tags: [evals, payments, llm]
series: dispute-engine
draft: true
---

I'm learning the AI-engineering stack by building something I know well: chargeback triage for a payments platform. A dispute comes in, and the system decides what kind it is, whether it's worth fighting, and what evidence you'd need. The project is a ten-week curriculum, and this series is the running log.

## What's built

- **Substrate (week 0).** Pydantic schemas for a dispute case and its classification, a versioned prompt, a CLI, and a disk cache for responses.
- **A synthetic case generator (week 1).** It's label-first: each case is generated *from* a chosen dispute family, so the gold label comes for free. It produced 200 cases across three difficulty tiers. 11% are marked as having a contestable label and are kept out of the headline numbers.
- **An eval harness (pulled forward from week 4).** It reports per-class precision, recall and F1, a confusion matrix, calibration, a breakdown by difficulty, and a failure list. CI reads the saved scorecard, so it needs no API key.

I skipped ahead to the harness because the eval is the part that matters. Without it, every prompt change is a guess.

## Four findings from the first runs

Two runs, 78 Haiku calls, about $0.55.

**1. The first "failures" were a data bug.** Two cases paired a gym membership with "tracking says delivered", because the generator picked merchants independently of the claim. The model was marked wrong for being sensible. If I'd tuned the prompt against that corpus, I'd have been optimizing against noise.

**2. Then the benchmark hit 100% macro F1 on every tier.** That isn't a pass. A benchmark that everything passes measures nothing, and my templates are too lexically distinct. I added a test that's expected to fail until the benchmark discriminates again. The next step is harder templates, not prompt tuning.

**3. Classification is solved. Judgment isn't.** Winnability accuracy is 43%. The model knows *what kind* of dispute it's looking at, but not *whether to fight it*. That's the half a client actually pays for.

**4. Calibration is off, in the safe direction.** ECE is 0.27, and every bin is underconfident: the model says 0.74 and is right 100% of the time. That matters later. A naive confidence-threshold router would escalate cases to the expensive model that never needed it, and burn money with no gain in accuracy.

## Next

Harder templates, so the benchmark means something again. Then the real problem: winnability.
