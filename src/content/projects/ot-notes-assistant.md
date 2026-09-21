---
name: "OT Notes Assistant"
description: "AI documentation system for an occupational therapy client. Converts voice and handwritten session notes into structured clinical reports, cutting documentation time by 80%."
tagline: "AI clinical notes from voice and handwriting"
logo: "/images/logos/ot-notes-assistant.svg"
image: "/images/projects/ot-notes-assistant/chat.png"
images:
  - "/images/projects/ot-notes-assistant/chat.png"
skills: ["n8n", "Google Gemini", "Automation"]
order: 2
---

## Overview

Occupational therapists spend a large share of every working day writing up sessions. Notes get captured in whatever form is fastest in the moment, a voice memo between appointments or a page of handwriting, and then have to be rewritten into structured clinical reports afterwards. That second pass is the expensive part.

This project automated it. Therapists keep capturing notes however they prefer, and an AI pipeline turns those raw inputs into formatted clinical documentation ready for review.

## Key Features

- **Multi-format intake:** Accepts both voice recordings and photographed handwritten notes, so the therapist's existing habits didn't have to change to adopt the system.

- **Structured clinical output:** Raw notes are transcribed and then reorganized into the report structure the practice already used, rather than into generic prose that would need reformatting.

- **Human review step:** Every generated report goes to the therapist for approval before it's filed. The system drafts; the clinician signs off.

- **Workflow orchestration:** The whole pipeline runs on n8n, which made each stage individually inspectable and easy to adjust as the practice's requirements changed.

## Technologies Used

- **n8n:** Workflow orchestration connecting intake, transcription, generation, and delivery.
- **Google Gemini:** Transcription of voice and handwritten input, and generation of the structured report.

## Outcome

Documentation time dropped by roughly 80%. The larger win was consistency: reports now follow the same structure regardless of how the original note was captured or how rushed the therapist was when they captured it.
