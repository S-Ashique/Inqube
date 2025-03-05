import React from "react";
import { Links } from "../ui/links";
import { ArrowIcon, DownloadIcon, EyeIcon } from "../svg";
import { gatewayList } from "./home-data";
import Image from "next/image";

const Gateway = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 md:flex md:gap-x-14 md:justify-between md:items-center bg-accent">
          <div className="">
            <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md">
              Your Gateway to In-Depth Information
            </p>
            <h1 className="text-3xl font-semibold text-heading mt-4">
              Unlock Valuable Knowledge with FutureTech's Resources
            </h1>
          </div>
          <Links href={"/"} variant={"outline"} className="mt-16 md:mt-0 bg-background">
            View All Resources
            <ArrowIcon />
          </Links>
        </div>

        {gatewayList.map((list) => (
          <div
            key={list.title}
            className="grid lg:grid-cols-12 lg:gap-px bg-border border-t border-r border-l "
          >
            <div className="lg:col-span-5 padding bg-background flex flex-col justify-center items-start pt-10 lg:pt-0">
              <div className="">{list.icon}</div>
              <h2 className="text-2xl font-semibold text-heading mt-6">
                {list.title}
              </h2>
              <p className="mt-2">{list.titletext} </p>
              <Links href={"/"} variant={"outline"} className="mt-10 ">
                Download {list.title} Now
                <DownloadIcon />
              </Links>

              <div className="bg-accent w-fit px-6 py-4 flex items-center gap-10 mt-4 border rounded-md">
                <div className="">
                  <p>Downloaded By</p>
                  <p className="text-base font-medium text-heading">
                    {list.downloadedby}+ Users
                  </p>
                </div>
                <div className="flex items-center -space-x-4 w-fit ">
                  {list.downloadeduserimage.map(({ src }, index) => (
                    <div
                      key={index}
                      className="size-10 rounded-full bg-muted border border-text-muted hover:z-10 focus:z-10 overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt="profile picture"
                        height={40}
                        width={40}
                        className="size-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 padding bg-background py-10 lg:py-14">
              <div className=" flex flex-col lg:flex-row  lg:justify-between gap-2 lg:gap-8">
                <h3 className="text-heading font-medium text-xl shrink-0">
                  {list.topictitle}
                </h3>
                <p className="max-w-lg">{list.topictext} </p>
              </div>
              <div className="h-72 mt-8 rounded-md overflow-hidden">
                <Image
                  src={list.topicimage}
                  alt="profile picture"
                  height={320}
                  width={640}
                  className="size-full object-cover object-center"
                />
              </div>

              <div className=" mt-6 grid md:grid-cols-12 gap-4">
                <div className=" md:col-span-4 bg-accent border rounded-md px-5 py-4">
                  <div className="">
                    <p>Total {list.title} </p>
                    <p className="font-medium text-base mt-1 text-heading">
                      Over {list.totalnumber} {list.title}
                    </p>
                  </div>
                </div>
                <div className=" md:col-span-8 bg-accent border rounded-md px-5 py-4 flex justify-between items-center">
                  <div className="">
                    <p>Download Formats</p>
                    <p className="font-medium text-base text-heading mt-1">
                      PDF format for access
                    </p>
                  </div>
                  <div className="shrink-0 flex gap-2 items-center border px-4 py-2 rounded-md bg-background">
                    Preview <EyeIcon />
                  </div>
                </div>
                <div className=" md:col-span-full bg-accent border rounded-md px-5 py-4">
                  <p>{list.topicsubtitle} </p>
                  <p className="font-medium text-base text-heading mt-2">
                    {list.topicsubtext}{" "}
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

export default Gateway;
