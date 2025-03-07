import Hero from "@/components/blog/hero";
import BlogNews from "@/components/blog/news";
import Related from "@/components/blog/related";
import React from "react";

const Blog = () => {
  return (
    <>
      <Hero />
      <BlogNews />
      <Related className="width" heading="Similar News" />
    </>
  );
};

export default Blog;
