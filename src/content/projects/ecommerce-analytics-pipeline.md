---
name: "eCommerce Marketing Analytics Pipeline"
description: "Marketing analytics pipeline consolidating multi-channel spend and revenue data into automated dashboards, giving the client near real-time profitability insight instead of month-end guesswork."
image: "/images/projects/vitruvi/byob.png"
images:
  - "/images/projects/vitruvi/byob.png"
  - "/images/projects/vitruvi/webpage.png"
skills: ["Python", "Google BigQuery", "Dashboards"]
order: 3
---

## Overview

The client was running paid campaigns across several platforms, each reporting its own numbers in its own dashboard, none of which accounted for cost of goods or shipping. Profitability was only knowable at month end, after someone manually stitched exports together in a spreadsheet. By then the spend decisions the data should have informed had already been made.

This project replaced that monthly reconciliation with an automated pipeline.

## Key Features

- **Multi-channel consolidation:** Ad platform spend and Shopify revenue land in a single warehouse on a schedule, keyed so campaigns can be traced through to actual orders.

- **True margin, not just ROAS:** Cost of goods and shipping are folded in, so the dashboards report contribution margin rather than platform-reported return, which consistently flattered the picture.

- **Near real-time refresh:** Reporting updates on a schedule rather than at month end, moving spend decisions from retrospective to current.

- **Automated delivery:** Dashboards refresh without anyone assembling them, removing the manual export-and-reconcile step entirely.

## Technologies Used

- **Python:** Extraction and transformation across the platform APIs.
- **Google BigQuery:** Warehouse and query layer.
- **Dashboarding:** Automated reporting on top of the warehouse tables.

## Outcome

Month-end spreadsheet reconciliation disappeared, and the client could see channel-level profitability while campaigns were still running rather than weeks after they ended.
