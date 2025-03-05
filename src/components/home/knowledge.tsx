import React from "react";
import { Links } from "../ui/links";
import { ArrowIcon, CommentIcon, LikeIcon, ShareIcon } from "../svg";
import { knowledgeProfilePictures } from "./home-data";
import Image from "next/image";

const navLinks = [
  { label: "All", href: "/" },
  { label: "Quantum Computing", href: "/" },
  { label: "AI Ethics", href: "/" },
  { label: "Space Exploration", href: "/" },
  { label: "Biotechnology", href: "/" },
  { label: "Renewable Energy", href: "/" },
];

const Knowledge = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 md:flex md:gap-x-14 md:justify-between md:items-center">
          <div className="">
            <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md">
              A Knowledge Treasure Trove
            </p>
            <h1 className="text-3xl font-semibold text-heading mt-4">
              Explore FutureTech's In-Depth Blog Posts
            </h1>
          </div>
          <Links href={"/"} variant={"outline"} className="mt-16 md:mt-0 ">
            View All Blogs
            <ArrowIcon />
          </Links>
        </div>
        <div className="py-6 border-l border-r border-t flex justify-center gap-x-3 padding overflow-clip">
          {navLinks.map(({ label, href }) => (
            <Links key={label} href={href} variant={"outline"}>
              {label}
            </Links>
          ))}
        </div>
        <div className=" border-l border-r border-t padding ">
          {knowledgeProfilePictures.map(
            (
              {
                comment,
                date,
                heading,
                like,
                link,
                name,
                share,
                src,
                subject,
                text,
              },
              index
            ) => (
              <div
                key={heading}
                className="grid grid-cols-12 gap-3  py-10 border-b last:border-0"
              >
                <div className="order-1 lg:order-1 col-span-8 lg:col-span-4 ">
                  <div className="flex items-center gap-4 ">
                    <div className="size-20 overflow-hidden rounded-full bg-accent ">
                      <Image
                        src={src}
                        alt="profile picture"
                        height={64}
                        width={64}
                        className="size-full object-cover object-center"
                      />
                    </div>
                    <div className="">
                      <p className="text-heading text-base font-medium">
                        {name}
                      </p>
                      <p>{subject} </p>
                    </div>
                  </div>
                </div>

                <div className="order-3  lg:order-2 col-span-full lg:col-span-6 ">
                  <p>{date} </p>
                  <h3 className="mt-6 text-heading font-medium text-xl">
                    {heading}{" "}
                  </h3>
                  <p>{text} </p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                      <LikeIcon
                        className={index === 0 ? "fill-red stroke-red" : " "}
                      />
                      <span> {like}</span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                      <CommentIcon /> <span> {comment} </span>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
                      <ShareIcon /> <span> {share}</span>
                    </div>
                  </div>
                </div>

                <div className="order-2 lg:order-3 col-span-4 lg:col-span-2 flex items-center justify-end">
                  <Links href={link} variant={"outline"}>
                    Read 
                    <ArrowIcon />
                  </Links>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Knowledge;
