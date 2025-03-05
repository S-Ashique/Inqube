import React from "react";
import { futuresList } from "./home-data";

const Futures = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16">
          <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md">
            Unlock the Power of
          </p>
          <h1 className="text-3xl font-semibold text-heading mt-4">
            Future Tech Features
          </h1>
        </div>

        {futuresList.map(({ cards, heading, icon, text }) => (
          <div
            key={heading}
            className="grid md:grid-cols-12 md:gap-px bg-border border-t border-r border-l"
          >
            <div className="md:col-span-5 padding bg-background flex flex-col justify-center pt-10 md:py-10">
              <div className="">{icon}</div>
              <h2 className="text-2xl font-semibold text-heading mt-6">{heading}</h2>
              <p className="mt-2">{text} </p>
            </div>

            <div className="md:col-span-7 grid lg:grid-cols-2 gap-6 bg-background py-10 lg:py-14 padding">
              {cards.map(({ heading, text }) => (
                <div key={heading} className=" border px-4 py-5 rounded-md bg-accent">
                  <h3 className="text-base font-medium text-heading">{heading}</h3>
                  <p className="mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </section>
    </>
  );
};

export default Futures;
