import React from "react";
import { counterList } from "./resources-data";

const Hero = () => {
  return (
    <>
      <section className="width border-l border-r ">
        <div className="padding pt-14 pb-10 ">
          <h1 className="text-4xl font-bold text-heading">
            Unlock a World of Knowledge
          </h1>
          <p className="mt-6 max-w-2xl">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and discussions
            on artificial intelligence. Whether you're an enthusiast or a
            professional, our AI podcasts offer a gateway to knowledge and
            innovation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-t">
          {counterList.map(({ number, title }) => (
            <div key={number} className="bg-background px-2 py-6 text-center">
              <h2 className="text-3xl text-heading font-semibold">
                {number}
                <span className="text-primary">+</span>
              </h2>
              <p className="mt-3 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
