export const homeList = [
  { label: "Features", href: "/" },
  { label: "Blogs", href: "/" },
  { label: "Resources", href: "/", newLink: true },
  { label: "Testimonials", href: "/" },
  { label: "Contact Us", href: "/" },
  { label: "Newsletter", href: "/" },
];

export const newsList = [
  { label: "Trending Stories", href: "/" },
  { label: "Featured Videos", href: "/" },
  { label: "Technology", href: "/" },
  { label: "Health", href: "/" },
  { label: "Politics", href: "/" },
  { label: "Environment", href: "/" },
];

export const blogsList = [
  { label: "Quantum Computing", href: "/" },
  { label: "AI Ethics", href: "/" },
  { label: "Space Exploration", href: "/" },
  { label: "Biotechnology", href: "/", newLink: true },
  { label: "Renewable Energy", href: "/" },
  { label: "Biohacking", href: "/" },
];

export const podcastsList = [
  { label: "AI Revolution", href: "/" },
  { label: "TechTalk AI", href: "/", newLink: true },
  { label: "AI Conversations", href: "/" },
];

export const resourcesList = [
  { label: "Whitepapers", href: "/" },
  { label: "Ebooks", href: "/" },
  { label: "Reports", href: "/" },
  { label: "Research Papers", href: "/" },
];

export type TList = (
  | {
      label: string;
      href: string;
      newLink?: undefined;
    }
  | {
      label: string;
      href: string;
      newLink: boolean;
    }
)[];
