import Image from "next/image";
import React from "react";
import { ArrowIcon, CommentIcon, LikeIcon, ShareIcon } from "../svg";
import { Links } from "../ui/links";
import { newsList } from "./news-data";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="width">
        <div className="padding pt-14 pb-10 border-l border-r ">
          <div className="">
            <h1 className="text-4xl font-bold text-heading">
              Today's Headlines: Stay Informed
            </h1>
            <p className="mt-6 max-w-2xl">
              Explore the latest news from around the world. We bring you
              up-to-the-minute updates on the most significant events, trends,
              and stories. Discover the world through our news coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-6 mt-16 max-w-7xl mx-auto ">
            <div className="md:col-span-6 h-72 md:h-80 rounded-md overflow-hidden">
              <Image
                src="/news/image_one.png"
                alt="new image"
                height={480}
                width={720}
                className="size-full object-cover object-center"
              />
            </div>
            <div className="md:col-span-6 ">
              <h3 className="text-2xl font-medium text-heading">
                Global Climate Summit Addresses Urgent Climate Action
              </h3>
              <p className=" mt-4">
                World leaders gathered at the Global Climate Summit to discuss
                urgent climate action, emissions reductions, and renewable
                energy targets.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="">
                  <p className="text-light">Category</p>
                  <p className="mt-1 font-medium">Environment</p>
                </div>
                <div className="">
                  <p className="text-light">Publication Date</p>
                  <p className="mt-1 font-medium">October 10, 2023</p>
                </div>
                <div className="">
                  <p className="text-light">Author</p>
                  <p className="mt-1 font-medium">Jane Smith</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-8">
                <div className="space-x-2">
                  <div className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                    <LikeIcon className="fill-red stroke-red" />
                    <span className="text-sm"> 14K </span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                    <ShareIcon /> <span className="text-sm"> 204</span>
                  </div>
                </div>
                <Link
                  href={"/"}
                  className="px-3 py-1 border rounded-full bg-accent text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t padding border-l border-r">
          <h3 className="text-2xl font-medium text-heading pt-10">
            Read more related news
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8  py-10">
            {newsList.map(({ like, share, src, subject, title }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="h-48 shrink-0 rounded-md overflow-hidden ">
                  <Image
                    src={src}
                    alt="new image"
                    height={480}
                    width={640}
                    className="size-full object-cover object-center"
                  />
                </div>
                <div className="  h-full grid grid-rows-3 gap-2">
                  <p className="  text-heading font-medium line-clamp-2">
                    {title}
                  </p>
                  <p className="underline text-light flex items-center">
                    {subject}
                  </p>
                  <div className="  flex items-center justify-between ">
                    <div className="space-x-2">
                      <div className="inline-flex  cursor-pointer items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                        <LikeIcon />
                        <span className="text-sm"> {like} </span>
                      </div>
                      <div className="inline-flex cursor-pointer  items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                        <ShareIcon /> <span className="text-sm"> {share}</span>
                      </div>
                    </div>
                    <Link
                      href={"/"}
                      className="px-3 py-1 border rounded-full text-sm bg-accent"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
