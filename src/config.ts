export const siteConfig = {
  name: "Matt Gwin",
  title: "Growth Marketing & Analytics Expert",
  description:
    "Portfolio website showcasing my work as a Growth Marketing & Analytics Expert",
  accentColor: "#759F60",

  // Carried over from the Magic Portfolio build
  headline: "Marketing Analyst, eCommerce Enthusiast, & Developer",
  location: "Vancouver, BC",
  // Booking link from the old /about page calendar CTA. Points at the /meeting
  // redirect (vercel.json) rather than the provider URL, so swapping booking
  // tools is a one-line redirect change instead of a site edit.
  calendarLink: "/meeting",

  social: {
    email: "hello@mattg.win",
    linkedin: "https://www.linkedin.com/in/mattgwin/",
    github: "https://github.com/mattgwin",
  },

  aboutMe:
    "Strategic marketing leader with 8+ years building growth marketing systems, now focused on integrating AI-powered solutions that help teams scale. I combine technical skills in data analytics and automation with demand generation expertise to architect frameworks that drive measurable results, working with Product, RevOps, and Marketing teams to turn emerging AI capabilities into actionable strategy.",

  skills: [
    "Python",
    "R",
    "SQL / BigQuery",
    "n8n",
    "Shopify / Liquid",
    "React",
    "Tailwind CSS",
    "Google Ads",
    "Meta Ads",
    "GA4 / GTM",
    "Tableau",
    "Northbeam",
  ],

  // Projects live in src/content/projects/*.md so each one can have a
  // detail page body; see src/content.config.ts.

  experience: [
    {
      company: "INDOCHINO",
      title: "Senior Manager, Acquisition & Retention",
      dateRange: "2025 - Present",
      bullets: [
        "Own the full acquisition and retention funnel for a premium made-to-measure menswear brand, directing $10M+ in annual working media across Google and Meta, a 13-vendor agency and martech stack, and a team of two.",
      ],
    },
    {
      company: "MG Insights",
      title: "Growth Marketing & AI Consultant",
      dateRange: "2025 - 2026",
      bullets: [
        "Built AI automation and marketing analytics systems for eCommerce and healthcare clients, spanning n8n and LLM-based workflow automation, secure patient communication infrastructure, and BigQuery reporting pipelines.",
      ],
    },
    {
      company: "Vitruvi",
      title: "Director, Direct-to-Consumer & Growth Marketing",
      dateRange: "2023 - 2025",
      bullets: [
        "Owned the company's largest sales channel end to end, reporting to the COO across paid media, lifecycle, site experience, and product launches, and leading a team of internal specialists and agency partners.",
      ],
    },
    {
      company: "Vitruvi",
      title: "Manager, Growth Marketing",
      dateRange: "2019 - 2023",
      bullets: [
        "Ran multi-channel demand generation across Shopify and Amazon, bringing Meta and Google Ads in-house and building the lifecycle, reporting, and rebrand infrastructure behind them.",
      ],
    },
    {
      company: "Major Tom Agency",
      title: "Analyst, Performance Marketing",
      dateRange: "2017 - 2019",
      bullets: [
        "Managed paid media performance across 30+ client accounts and $3M+ in annual ad spend, partnering with account teams on optimization, measurement, and automated reporting.",
      ],
    },
    {
      company: "Saab Technologies",
      title: "Coordinator, Marketing & Sales",
      dateRange: "2016",
      bullets: [
        "Supported B2B demand generation for Sales teams across North America and Europe, covering market research, digital campaigns, and CRM data operations for an enterprise maritime software product.",
      ],
    },
    {
      company: "Baseball Prospectus Toronto",
      title: "Co-Founder & Managing Editor",
      dateRange: "2013 - 2017",
      bullets: [
        "Co-founded and ran a sabermetrics publication reaching 500k-1M annual page views, leading editorial and a contributor roster through to its acquisition by Baseball Prospectus.",
      ],
    },
  ],

  education: [
    {
      school: "UBC Sauder School of Business",
      degree: "Bachelor of Commerce (BCom)",
      dateRange: "",
      achievements: [
        "Advanced coursework in Marketing and Business Technology Management.",
      ],
    },
  ],
};
