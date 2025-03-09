import Hero from "@/components/blogs/hero";
import BlogNews from "@/components/blogs/news";
import Related from "@/components/blogs/related";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

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
