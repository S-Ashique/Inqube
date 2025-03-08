import React from "react";
import { detailsList, relatedList } from "./resources-data";
import Image from "next/image";
import { ArrowIcon, PlayIcon } from "../svg";
import { Links } from "../ui/links";

const ResourcesDetails = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 bg-accent flex flex-wrap justify-between items-center gap-10">
          <div className="">
            <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md font-medium">
              Dive into the Details
            </p>
            <h1 className="text-4xl font-bold text-heading mt-4">
              In-Depth Reports and Analysis
            </h1>
          </div>
          <div className="bg-background p-1 flex gap-1 w-fit rounded-md shrink-0">
            <p className="px-4 py-2 border rounded-md bg-muted">Whitepapers</p>
            <p className="px-4 py-2 border rounded-md bg-accent">Ebooks</p>
            <p className="px-4 py-2 border rounded-md bg-accent">Reports</p>
          </div>
        </div>
        {detailsList.map((list) => (
          <div
            key={list.title}
            className="grid lg:grid-cols-12 lg:gap-px bg-border border-t border-r border-l "
          >
            <div className="lg:col-span-5 padding bg-background flex flex-col justify-center items-start pt-10 lg:pt-0">
              <div className="">{list.icon}</div>
              <h3 className="text-2xl font-semibold text-heading mt-6">
                {list.title}
              </h3>
              <p className="mt-2">{list.text} </p>
            </div>

            <div className="lg:col-span-7 padding bg-background py-10 lg:py-14">
              <div className="h-72 rounded-md overflow-hidden">
                <Image
                  src={list.src}
                  alt="profile picture"
                  height={320}
                  width={640}
                  className="size-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4">
                <div className="">
                  <p className="font-medium text-heading text-base md:text-lg">
                    {list.heading}{" "}
                  </p>
                  <p className="mt-2 max-w-2xl">{list.paragraph} </p>
                </div>
                <Links href={"/"} variant={"outline"}>
                  Download PDF Now
                </Links>
              </div>
              <div className="grid md:grid-cols-3 gap-2 mt-6">
                <div className="px-5 py-4 bg-accent border">
                  <p>Publication Date</p>
                  <p className="text-heading font-medium mt-2">
                    {list.published}
                  </p>
                </div>
                <div className="px-5 py-4 bg-accent border">
                  <p>Category</p>
                  <p className="text-heading font-medium mt-2">
                    {list.category}
                  </p>
                </div>
                <div className="px-5 py-4 bg-accent border">
                  <p>Author</p>
                  <p className="text-heading font-medium mt-2">{list.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-r border-l border-t ">
          {relatedList.map(({ src, text, title }) => (
            <div
              key={title}
              className="py-10 padding bg-background  flex flex-col lg:last:hidden"
            >
              <div className="h-60 rounded-md overflow-hidden shrink-0">
                <Image
                  src={src}
                  height={480}
                  width={720}
                  alt="news picture"
                  className="size-full object-cover object-center "
                />
              </div>
              <p className="mt-6 font-medium text-heading">{title}</p>
              <div className="mt-2 h-full flex flex-col gap-4 justify-between">
                <p className="text-light">{text}</p>
                <div className="  flex gap-2">
                  <Links href={"/"} variant={"outline"} className=" w-1/2 bg-background hover:bg-background focus-visible:bg-background">
                    View Details
                  </Links>
                  <Links href={"/"} variant={"outline"} className=" w-1/2">
                    Download PDF Now
                  </Links>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResourcesDetails;
