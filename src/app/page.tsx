import Futures from "@/components/home/futures";
import Gateway from "@/components/home/gateway";
import GetInTouch from "@/components/home/get-in-touch";
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
      <GetInTouch />
    </>
  );
};

export default Home;
