export const siteConfig = {
  name: "Matt Gwin",
  title: "Growth Marketing & Analytics Expert",
  description:
    "Portfolio website showcasing my work as a Growth Marketing & Analytics Expert",
  accentColor: "#759F60",

  // Carried over from the Magic Portfolio build
  headline: "Marketing Analyst, eCommerce Enthusiast, & Developer",
  location: "Vancouver, BC",
  // Booking link from the old /about page calendar CTA
  calendarLink:
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0LQK10cx6SYPIcCIdoRhiSfhMkHzqh4Urzm7bbzxNen7jP5ulvhwAjA7h5ZbZBiKur2WE9P1Qq",

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
      company: "MG Insights",
      title: "Growth Marketing & AI Consultant",
      dateRange: "2025 - Present",
      bullets: [
        "Delivered AI automation and marketing solutions for eCommerce and healthcare clients, translating technical capabilities into measurable business outcomes.",
        "Engineered AI documentation system for an occupational therapy client using n8n and Google Gemini, automating conversion of voice/handwritten notes to clinical reports and reducing documentation time by 80%.",
        "Deployed secure patient communication system for a healthcare client using n8n and Twilio APIs with intelligent routing and caller ID privacy.",
        "Built marketing analytics pipeline for an eCommerce client using Python and Google BigQuery, consolidating multi-channel data into automated dashboards for near real-time profitability insights.",
      ],
    },
    {
      company: "Vitruvi",
      title: "Director, Direct-to-Consumer & Growth Marketing",
      dateRange: "2023 - 2025",
      bullets: [
        "Owned and scaled the company's largest sales channel, reporting directly to the COO while developing growth strategies that delivered 4x revenue expansion and the channel's first profitable year.",
        "Orchestrated cross-functional product launch, aligning Marketing, Product, and Operations around unified metrics and generating $1.5M+ first-year revenue.",
        "Architected systematic paid media testing framework, scaling investment to multi-million dollar levels while improving ROAS by over 30%.",
      ],
    },
    {
      company: "Vitruvi",
      title: "Manager, Growth Marketing",
      dateRange: "2019 - 2022",
      bullets: [
        "Managed multi-channel demand generation across Shopify and Amazon, executing integrated campaigns with Content, Affiliate, and Influencer teams.",
        "Led cross-functional rebrand spanning Marketing, Design, and Development, managing external partners through a complex Shopify implementation with dynamic bundling that improved AOV by 20%+.",
        "Engineered automated reporting infrastructure in R consolidating cross-channel sales data, improving forecast accuracy by 30%.",
      ],
    },
    {
      company: "Major Tom Agency",
      title: "Analyst, Performance Marketing",
      dateRange: "2017 - 2019",
      bullets: [
        "Drove campaign optimization across $3M+ in client ad spend, working with account managers across 30+ accounts to exceed ROI and efficiency targets.",
        "Built automated performance dashboards in Tableau and Google Data Studio, eliminating 20+ hours of manual weekly reporting while enabling real-time client insights.",
      ],
    },
    {
      company: "Saab Technologies",
      title: "Coordinator, Marketing & Sales",
      dateRange: "2016",
      bullets: [
        "Partnered with Sales teams across North America and Europe to drive B2B lead generation through targeted digital campaigns and market research.",
        "Optimized CRM data architecture to build scalable marketing operations, improving campaign targeting and aligning Marketing and Sales around pipeline objectives.",
      ],
    },
    {
      company: "Baseball Prospectus Toronto",
      title: "Co-Founder & Managing Editor",
      dateRange: "2013 - 2017",
      bullets: [
        "Founded and scaled BlueJaysPlus.com, a pioneering sabermetrics-focused sports content platform, acquired by Baseball Prospectus.",
        "Grew the site to 500k-1M annual page views, establishing it as a leading source for advanced baseball analytics.",
        "Published expert analysis in leading sports media outlets including ESPN and the Baseball Prospectus Annual (2016-2017).",
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
