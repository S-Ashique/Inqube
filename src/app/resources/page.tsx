import ResourcesDetails from "@/components/resources/details";
import Hero from "@/components/resources/hero";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
};
const Resources = () => {
  return (
    <>
      <Hero />
      <ResourcesDetails />
    </>
  );
};

export default Resources;
