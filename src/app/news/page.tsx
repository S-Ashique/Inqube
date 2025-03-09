import Features from "@/components/news/features";
import Hero from "@/components/news/hero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};
const News = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default News;
