import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Matt",
  lastName: "Gwin",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Performance Marketing & Analytics Expert",
  avatar: "/images/avatar.jpg",
  location: "America/Vancouver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mattgwin/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hello@mattg.win",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Marketing Analyst, eCommerce Enthusiast, & Developer</>,
  subline: (
    <>
      I'm Matt, a performance marketer with a proven track record of leveraging data and technical analysis to achieve significant business growth.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0LQK10cx6SYPIcCIdoRhiSfhMkHzqh4Urzm7bbzxNen7jP5ulvhwAjA7h5ZbZBiKur2WE9P1Qq",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A performance marketer with a proven track record of leveraging data and technical analysis to achieve significant business growth.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Vitruvi",
        timeframe: "2023 - 2025",
        role: "Director, eCommerce",
        achievements: [
          <>Delivered 4x+ revenue growth in Vitruvi's eCommerce channel over three years, leading paid, organic, and earned marketing, web development, and design initiatives.</>,
          <>Achieved the eCommerce channel's first profitable year by implementing accurate demand forecasts, reducing operational costs by 15%, and optimizing revenue strategies.</>,
          <>Propelled Vitruvi's growth by launching the Humidifier product line on eCommerce, achieving $1.5M+ in first-year sales and expanding core product offerings.</>,
          <>Spearheaded Shopify implementation and managed complex web development, ensuring seamless operations and the successful launch of Vitruvi's 2022 rebrand web experience.</>,
          <>Implemented custom Shopify web experiences, including the 'Build Your Own Bundle' feature, resulting in a 12% increase in average cart size within its category</>
        ],
        images: [
          {
            src: "/images/projects/vitruvi/webpage.png",
            alt: "Vitruvi Homepage",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/vitruvi/byob.png",
            alt: "Vitruvi Build Your Own Bundle",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Vitruvi",
        timeframe: "2019 - 2022",
        role: "Manager, Performance Marketing",
        achievements: [
          <>Maximized $1M+ annual ad spend, doubling investment and achieving a 40%+ ROAS increase within 12 months through platform automation and profitable Google Shopping channel development.</>,
          <>Engineered a fully automated sales reporting dashboard and R data pipeline, improving forecast accuracy by 30% and reporting frequency by 3x.</>
        ],
        images: [],
      },
      {
        company: "Major Tom",
        timeframe: "2017 - 2018",
        role: "Analyst, Performance Marketing",
        achievements: [
          <>Drove measurable ROI growth through strategic digital marketing campaigns management across Paid Search, Paid Social, and SEO channels.</>,
          <>Delivered timely, actionable insights across 50+ client accounts, supporting 15 account managers.</>,
          <>Developed and automated client reporting via Tableau and Google Data Studio</>,
          <>Led internal data measurement team, enhancing campaign measurement and optimization through innovative analysis techniques.</>,
        ],
        images: [
          {
            src: "/images/projects/major-tom/webpage.png",
            alt: "Major Tom Homepage",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Saab Technologies",
        timeframe: "2016",
        role: "Coordinator, Marketing & Sales",
        achievements: [
          <>Drove strategic Sales & Marketing project execution, showcasing exceptional autonomy and initiative.</>,
          <>Engineered lead generation growth for KleinPilot through data-driven market analysis and targeted digital campaigns.</>,
          <>Optimized CRM performance via custom workflow automation, directly enhancing business development velocity.</>,
          <>Ensured CRM data integrity and operational excellence, a critical foundation for sales and marketing effectiveness.</>
        ],
        images: [],
      },
      {
        company: "Baseball Prospectus Toronto",
        timeframe: "2013 - 2017",
        role: "Co-Founder & Managing Editor",
        achievements: [
          <>Founded and scaled BlueJaysPlus.com, a pioneering sabermetrics-focused sports content platform, acquired by Baseball Prospectus.</>,
          <>Grew BlueJaysPlus.com to 500k-1M annual page views, establishing it as a leading source for advanced baseball analytics.</>,
          <>Published expert baseball analysis in leading sports media outlets, including ESPN and Baseball Prospectus Annual (2016-2017).</>
        ],
        images: [
          {
            src: "/images/projects/baseball-prospectus-toronto/webpage.png",
            alt: "Baseball Prospectus Toronto Homepage",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/baseball-prospectus-toronto/byline_espn.png",
            alt: "ESPN Byline",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "BCom, UBC Sauder School of Business",
        description: <>Advanced coursework in Marketing and Business Technology Management.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Data Analysis & Visualization",
        description: <>Comprehensive data analysis: R/Python analytics, robust data pipelines, and insightful dashboards via Tableau/Data Studio for data-driven results.</>,
        images: [],
      },
      {
        title: "Shopify eCommerce Management",
        description: <>Shopify proficiency in platform management and front-end development using Liquid, HTML, and CSS to enhance user experience and drive sales.</>,
        images: [],
      },
      {
        title: "Paid Search & Paid Social Advertising",
        description: <>Management and strategic setup of high-ROI paid campaigns across Google Ads, Facebook Ads Manager, TikTok Ads, Pinterest Ads, Snap Ads, and more.</>,
        images: [],
      },
      {
        title: "Conversion Optimization, Analytics, & Tracking",
        description: <>Tracking set-up and actionable insights for conversion optimization via Northbeam, Google Analytics, Google Tag Manager, and Hotjar.</>,
        images: [],
      },
      {
        title: "Front End Web Development",
        description: <>Working knowledge of React (JSX), Tailwind CSS, and Git for front-end development.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
