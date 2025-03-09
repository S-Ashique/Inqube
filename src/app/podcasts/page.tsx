import Hero from "@/components/podcast/hero";
import PodcastContent from "@/components/podcast/podcast-content";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcasts",
};

const Podcasts = () => {
  return (
    <>
      <Hero />
      <PodcastContent />
    </>
  );
};

export default Podcasts;
