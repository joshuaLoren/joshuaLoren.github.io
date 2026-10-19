---
title: One Claude call shape doesn't fit every model
date: 2026-08-25
tags: [claude-api, llm]
---

Building Dispute Engine, I ran the same classification call against Haiku 4.5 and Opus. Haiku rejects adaptive thinking and the `effort` parameter with a 400. If your code assumes one request shape for every model, swapping models breaks it.

What worked was a small per-model function that returns the thinking-related kwargs, so the call site stays the same and each model gets only the parameters it accepts.
