export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "What We Offer",
    description: `Comprehensive content management services tailored for creators and personal brands.\n\nManagements like:\nContent calendar, Caption writing, Reels strategy & growth tracking, Scripting, Thumbnails, Shorts publishing, Short-form, long-form edits, Motion graphics, overlays, reels, Platform-optimized exports`,
    technologies: ["Instagram Management", "YouTube Management", "Video Editing Services"],
    github: "",
    demo: "https://www.odunsi.xyz/",
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
  {
    id: 1,
    name: "Additional Services",
    description:
      "Transform your existing content into multiple formats for maximum reach.\n Professional writing that captures your voice and engages your audience.\nData-driven insights to optimize your content strategy and growth.\nComprehensive review of your social presence with actionable recommendations.",
    technologies: ["Content Repurposing", "Ghostwriting/Scripting", "Analytics Dashboards", "Account Audits"],
    github: "https://github.com/victorcodess/interlock",
    demo: "https://interlock-teal.vercel.app/",
    image: require(".//../../public/projects/interlock.png"),
    available: true,
  },
  {
    id: 2,
    name: "How We're Different",
    description:
      "1-on-1 Attention\nDirect access to your dedicated content manager\n\nWorked with Influencers\nExperience with top creators across niches\n\nResults-Driven\nFocused on metrics that matter to your growth\n\nAffordable\nPremium service without the premium price tag",
    technologies: [],
    github: "https://github.com/victorcodess/synthetix",
    demo: "https://synthetix-iota.vercel.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 3,
    name: "Our Process",
    description:
      "1. Discovery Call\nWe learn about your goals, audience, and current content strategy to identify opportunities.\n\n2. Strategy & Audit\nWe analyze your accounts and develop a tailored content plan aligned with your goals.\n\n3. Execution\nOur team implements the strategy, creating and managing content across your platforms.\n\n4. Monthly Review\nComprehensive analysis of results, strategy refinement, and goal setting for continued growth.",
    technologies: [],
    github: "https://github.com/victorcodess/propellent",
    demo: "https://propellent.vercel.app/",
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  {
    id: 4,
    name: "RESULTS THAT SPEAK",
    description:
      "We don't chase vanity metrics. We focus on meaningful growth.\n\n1. 35% Increase in Organic Leads.\nFor a US-based Course Creator in 60 Days\n\n2.300K+ Monthly Reach\nFor a Finance Influencer — Without Paid Ads\n\n3. 15x DM Inquiries in 90 Days\nFor a Premium Wellness Coach",
    technologies: [],
    github: "https://github.com/victorcodess/flixify",
    demo: "https://flixify.victorwilliams.me/",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
