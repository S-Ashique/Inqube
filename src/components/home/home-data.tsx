import { ContributionIcon, FuturesIcon, NewsIcon, ReadershipIcon, ResearchIcon } from "../svg";

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