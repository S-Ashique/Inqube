import React from "react";
import { podcastList } from "./podcast-data";
import { Links } from "../ui/links";
import { ArrowIcon, DownloadIcon, PlayIcon, StarIcon } from "../svg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="width">
        <div className="padding pt-14 pb-10 border-l border-r ">
          <h1 className="text-4xl font-bold text-heading">
            Unlock the World of Artificial Intelligence through Podcasts
          </h1>
          <p className="mt-6 max-w-2xl">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and discussions
            on artificial intelligence. Whether you're an enthusiast or a
            professional, our AI podcasts offer a gateway to knowledge and
            innovation.
          </p>
        </div>
        {podcastList.map((list) => (
          <div
            key={list.title}
            className="grid lg:grid-cols-12 lg:gap-px bg-border border-t border-r border-l "
          >
            <div className="lg:col-span-5 padding bg-background flex flex-col justify-center pt-10 lg:pt-0">
              <div className="">{list.icon}</div>

              <div className="mt-8 flex justify-between gap-4 flex-wrap ">
                <h3 className="text-2xl font-semibold text-heading ">
                  {list.title}
                </h3>
                <div className="bg-accent px-3 py-2 rounded-full border flex gap-1 ">
                  {Array.from({ length: list.stars }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 bg-accent px-4 py-5 rounded-md">
                <div className="">
                  <p className="text-light">Host</p>
                  <p className="font-medium text-heading mt-1">{list.host}</p>
                </div>
                <Links
                  is_scale={false}
                  href={"/"}
                  variant={"outline"}
                  className=""
                >
                  Listen Podcast <ArrowIcon />
                </Links>
              </div>
            </div>

            <div className="lg:col-span-7 padding bg-background py-10 lg:py-14">
              <div className="h-72 rounded-md overflow-hidden relative">
                <Image
                  src={list.src}
                  height={480}
                  width={720}
                  alt="news picture"
                  className="size-full object-cover object-center [mask-image:linear-gradient(to_bottom,black_40%,transparent)] "
                />
                <div className="absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 z-10  bg-background rounded-full">
                  <PlayIcon />
                </div>
              </div>
              <p className="text-lg lg:text-xl font-medium text-heading mt-6 ">
                {list.headline}{" "}
              </p>
              <p className="mt-3 max-w-2xl">{list.text} </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-accent border rounded-md px-4 py-3 flex justify-between flex-col">
                  <p className="text-sm">Total Episodes</p>
                  <p className="mt-2 font-medium text-heading">
                    {list.episodes}{" "}
                  </p>
                </div>
                <div className="bg-accent border rounded-md px-4 py-3 flex justify-between flex-col">
                  <p className="text-sm">Average Episode Length</p>
                  <p className="mt-2 font-medium text-heading">
                    {list.length}{" "}
                  </p>
                </div>
                <div className="bg-accent border rounded-md px-4 py-3 flex justify-between flex-col">
                  <p className="text-sm">Release Frequency</p>
                  <p className="mt-2 font-medium text-heading">
                    {list.release}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
