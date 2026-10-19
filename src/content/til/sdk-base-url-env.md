---
title: The Anthropic SDK quietly picks up a base URL from your environment
date: 2026-08-25
tags: [claude-api, gotcha]
---

Run a script from inside a Claude Code session and the SDK can pick up the base URL that the session exports into the environment, so your requests go through that gateway instead of the public API. Nothing errors, and responses look normal.

If a project needs to hit a specific endpoint, pin `base_url` explicitly when you construct the client instead of trusting the ambient environment.
