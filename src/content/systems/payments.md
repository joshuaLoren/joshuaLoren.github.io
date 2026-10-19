---
title: Payments infrastructure
tagline: Money movement for accounting-firm software, built from scratch at Aiwyn.
status: live
stack: [Kotlin, Spring Boot, PostgreSQL, Stripe, Plaid]
metric: $24M → $2.38B processed
order: 1
---

Founding developer of accounting-firm software at Aiwyn, owning the payments platform from the first commit.

## Rails

| rail | via |
|---|---|
| cards | Stripe Payment Intents |
| marketplace / payouts | Stripe Connect |
| US bank debit | ACH, Plaid account linking |
| Canada | Pre-Authorized Debit (PAD) |
| UK | BACS |
| FX | multi-currency |

## Scale

Processed volume grew from $24M to $2.38B (about 100x) on this platform.

<!-- TODO(joshua): add write-ups here: ledger model, idempotency, retry/return handling, reconciliation -->
