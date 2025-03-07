import React from "react";
import { Links } from "../ui/links";
import { ArrowIcon, PlayIcon } from "../svg";
import { featuresList } from "./news-data";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 md:flex md:gap-x-14 md:justify-between md:items-center bg-accent">
          <div className="">
            <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md font-medium">
              Featured Videos
            </p>
            <h1 className="text-4xl font-bold text-heading mt-4">
              Visual Insights for the Modern Viewer
            </h1>
          </div>
          <Links
            href={"/"}
            variant={"outline"}
            className="mt-10 md:mt-0 bg-background hover:bg-muted group hover:translate-x-1 hover:-translate-y-1"
          >
            View All
            <ArrowIcon className="group-hover:rotate-0 animated" />
          </Links>
        </div>
        <div className="grid md:grid-cols-2 gap-px border-t border-r border-l bg-border">
          {featuresList.map(({ src, text, time, title }) => (
            <div key={title} className="padding py-10 bg-background">
              <div className="relative bg-linear-to-b from-muted to-accent">
                <div className="h-96 rounded-md overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)] ">
                  <Image
                    src={src}
                    alt="feature image"
                    height={480}
                    width={720}
                    className="size-full object-cover object-center"
                  />
                </div>
                <div className="absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 bg-background  rounded-full overflow-hidden">
                  <PlayIcon className=" " />
                </div>
                <p className="text-heading font-medium absolute bottom-1 right-2">
                  {time} min
                </p>
              </div>

              <p className="font-medium text-heading text-base md:text-lg mt-4">
                {title}{" "}
              </p>
              <p className="mt-2">{text} </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
