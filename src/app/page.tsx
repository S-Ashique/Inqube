import Futures from "@/components/home/futures";
import Hero from "@/components/home/hero";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Futures />
      <div className="pb-32 border-t"></div>
    </>
  );
};

export default Home;
