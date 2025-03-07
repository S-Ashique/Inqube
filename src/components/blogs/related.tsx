import Image from "next/image";
import React from "react";
import { newsList } from "../news/news-data";
import { LikeIcon, ShareIcon } from "../svg";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Related = ({
  className,
  heading = "Read more related news",
}: {
  className?: string;
  heading?: string;
}) => {
  return (
    <div className={cn("border-t padding border-l border-r ", className)}>
      <h3 className="text-2xl font-medium text-heading pt-10">{heading}</h3>

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
              <p className="  text-heading font-medium line-clamp-2">{title}</p>
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
  );
};

export default Related;
