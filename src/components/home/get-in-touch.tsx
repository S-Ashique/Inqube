import React from "react";
import { Links } from "../ui/links";
import { ArrowIcon, LogoIcon } from "../svg";
import { contactList } from "./home-data";

const GetInTouch = () => {
  return (
    <>
      <section className="width bg-accent border-l border-r border-t padding">
        <div className="  py-10 flex flex-col md:flex-row gap-10  md:items-center ">
          <div className="">
            <LogoIcon className="size-20" />
          </div>
          <div className="">
            <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md">
              Learn, Connect, and Innovate
            </p>
            <h1 className="text-3xl font-semibold text-heading mt-3">
              Be Part of the Future Tech Revolution
            </h1>
            <p className="mt-6 max-w-2xl">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className=" sm:w-4/6 lg:w-full mx-auto pb-10 ">
          <div className=" bg-background p-1 grid lg:grid-cols-3 gap-1 rounded-md">
            {contactList.map(({ text, title }) => (
              <div
                key={title}
                className="bg-accent rounded-md px-4 py-6 flex items-center justify-between gap-4"
              >
                <div className=" h-full">
                  <p className="text-lg from-heading font-medium ">{title} </p>
                  <p className="mt-2 text-balance">{text} </p>
                </div>
                <Links href={"/"} size={"icon"} className="rounded-full">
                  <ArrowIcon />
                </Links>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
