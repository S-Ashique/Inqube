import React from "react";
import { podcastEpisodesList } from "./podcast-data";
import Image from "next/image";
import { ArrowIcon, PlayIcon } from "../svg";
import { Links } from "../ui/links";

const PodcastContent = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 bg-accent">
          <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md font-medium">
            Stay Informed with Fresh Content
          </p>
          <h1 className="text-4xl font-bold text-heading mt-4">
            Latest Podcast Episodes
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-r border-l border-t ">
          {podcastEpisodesList.map(({ src, text, title }) => (
            <div key={title} className="py-10 padding bg-background">
              <div className="h-60 rounded-md overflow-hidden relative">
                <Image
                  src={src}
                  height={480}
                  width={720}
                  alt="news picture"
                  className="size-full object-cover object-center [mask-image:linear-gradient(to_bottom,black_40%,transparent)] "
                />
                <div className="absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 z-10  bg-background rounded-full">
                  <PlayIcon />
                </div>
              </div>
              <p className="mt-6 font-medium text-heading">{title}</p>
              <p className="mt-2">{text}</p>
              <Links href={"/"} variant={"outline"} className=" mt-4">
                Listen Podcast <ArrowIcon />
              </Links>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PodcastContent;
