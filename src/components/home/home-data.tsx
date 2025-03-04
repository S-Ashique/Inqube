import {
  ContributionIcon,
  FuturesIcon,
  NewsIcon,
  ReadershipIcon,
  ResearchIcon,
} from "../svg";

export const counterList = [
  { number: "300", title: "Resources available" },
  { number: "12K", title: "Total Downloads" },
  { number: "10K", title: "Active Users" },
];
export const profilePictures = [
  "/male_one.png",
  "/female_two.png",
  "/female_one.png",
  "/male_two.png",
];

export const columnThreeList = [
  {
    icon: <NewsIcon />,
    title: "Latest News Updates",
    text1: "Stay Current",
    text2: "Over 1,000 articles published monthly",
  },
  {
    icon: <ContributionIcon />,
    title: "Expert Contributors",
    text1: "Trusted Insights",
    text2: "50+ renowned AI experts on our team",
  },
  {
    icon: <ReadershipIcon />,
    title: "Global Readership",
    text1: "Worldwide Impact",
    text2: "2 million monthly readers",
  },
];

export const futuresList = [
  {
    heading: "Future Technology Blog",
    text: "Stay informed with our blog section dedicated to future technology",
    icon: <FuturesIcon />,
    cards: [
      {
        heading: "Quantity",
        text: "Over 1,000 articles on emerging tech trends and breakthroughs.",
      },
      {
        heading: "Variety ",
        text: "Articles cover fields like AI, robotics, biotechnology, and more.",
      },
      {
        heading: "Frequency ",
        text: " Fresh content added daily to keep you up to date.",
      },
      {
        heading: " Authoritative",
        text: "Written by our team of tech experts and industry professionals. ",
      },
    ],
  },
  {
    heading: "Research Insights Blogs",
    text: "Dive deep into future technology concepts with our research section.",
    icon: <ResearchIcon />,
    cards: [
      {
        heading: "Depth",
        text: "500+ research articles for in-depth understanding.",
      },
      {
        heading: "Graphics ",
        text: "Visual aids and infographics to enhance comprehension.",
      },
      {
        heading: "Trends ",
        text: "Explore emerging trends in future technology research.",
      },
      {
        heading: " Contributors",
        text: "Contributions from tech researchers and academics.",
      },
    ],
  },
];

export const knowledgeProfilePictures = [
  {
    src: "/male_one.png",
    name: "John Techson",
    subject: "Quantum Computing",
    date: "October 15, 2023",
    heading: "The Quantum Leap in Computing",
    text: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    link: "/",
    like: "24.5k",
    comment: "50",
    share: "20",
  },

  {
    src: "/female_two.png",
    name: "Sarah Ethicist",
    subject: "AI Ethics",
    date: "November 5, 2023",
    heading: "The Ethical Dilemmas of AI",
    text: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    link: "/",
    like: "32k",
    comment: "72",
    share: "18",
  },

  {
    src: "/male_two.png",
    name: "Astronomer X",
    subject: "Space Exploration",
    date: "December 10, 2023",
    heading: "The Mars Colonization Challenge",
    text: "Exploring the technical and logistical challenges of human colonization on Mars.",
    link: "/",
    like: "20k",
    comment: "31",
    share: "12",
  },
];
