---
name: "Vital Number"
description: "A secure communication management platform for Canadian physicians, currently in beta. It integrates with existing phone lines to give doctors virtual numbers, rules-based call routing, and caller ID privacy without changing how they take calls."
link: "https://vitalnumber.co"
image: "/images/projects/vital-number/Vital1.jpg"
images:
  - "/images/projects/vital-number/Vital1.jpg"
  - "/images/projects/vital-number/Vital2.jpg"
skills: ["Next.js", "TypeScript", "Twilio API", "Prisma", "PostgreSQL"]
order: 1
---


## Overview
In this project, I focused on revolutionizing how Canadian physicians handle their communications while maintaining strict privacy and compliance standards. The goal was to create a comprehensive telephony management system that bridges the gap between professional medical practice and modern communication needs. By integrating virtual phone numbers, automated call routing, and secure access controls, this solution significantly enhances both physician privacy and patient accessibility while ensuring compliance with Canadian healthcare regulations.

## Key Features
- **Virtual Number Management:** Developed a sophisticated system for managing virtual phone numbers that allows physicians to maintain separate professional and personal communications. This includes intelligent call routing based on office hours and on-call schedules.

- **Secure Communication Controls:** Implemented a robust security layer that protects physician privacy by masking personal numbers during outbound calls while maintaining professional caller ID presentation. This system ensures HIPAA and PIPEDA compliance while enhancing patient trust.

- **Professional Call Handling:** Created an automated call management system that intelligently routes patient calls based on configurable rules, including office hours and callback preferences. This includes integrated voicemail and comprehensive call logging for audit trails.

- **Role-Based Access Management:** Built a secure access control system that allows different levels of access for various staff members while maintaining strict privacy controls and audit capabilities.

## Technologies Used
- **Next.js 14 with TypeScript:** For building a modern, type-safe web application with server-side rendering capabilities.
- **Twilio API:** For managing virtual phone numbers and handling telephony operations.
- **Prisma & PostgreSQL:** For robust database management and data modeling.
- **NextAuth.js:** For implementing secure authentication and authorization.
- **Tailwind CSS & Radix UI:** For creating a professional, accessible user interface.
- **Google Cloud SQL:** For secure, scalable database hosting.

## Challenges and Learnings
One of the biggest challenges was ensuring the system remained compliant with Canadian healthcare privacy regulations while providing a seamless user experience. This involved implementing sophisticated call routing logic, maintaining detailed audit trails, and ensuring data encryption at rest and in transit. Additionally, the integration with Twilio required careful handling of webhook endpoints and real-time communication states.

## Outcome
Currently in beta phase, Vital Number is actively working with Canadian physicians to manage their communications. The system is being tested with a select group of early adopters, gathering valuable feedback on privacy controls, call routing, and user experience.