---
title: The Anthropic SDK can inherit a base URL from your environment
date: 2026-08-25
summary: Run inside a Claude Code session, the SDK picks up the session's gateway URL without any error. Pin base_url explicitly.
---

Running a script from inside a Claude Code session, the Anthropic SDK picked up the base URL the session exports into the environment. Requests went through that gateway instead of the public API. Nothing errored and responses looked normal.

If a project needs a specific endpoint, set `base_url` when you construct the client instead of trusting the environment.
