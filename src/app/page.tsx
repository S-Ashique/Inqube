import Futures from "@/components/home/futures";
import Gateway from "@/components/home/gateway";
import Hero from "@/components/home/hero";
import Knowledge from "@/components/home/knowledge";
import Testimonials from "@/components/home/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Futures />
      <Knowledge />
      <Gateway />
      <Testimonials />
    </>
  );
};

export default Home;
