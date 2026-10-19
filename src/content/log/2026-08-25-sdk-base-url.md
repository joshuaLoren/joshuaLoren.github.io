---
title: anthropic SDK picks up base URL from the environment
date: 2026-08-25
system: til
lines:
  - inside a claude code session the SDK inherits the session's gateway URL
  - no error, responses look normal
  - "fix: pin base_url when constructing the client"
---
