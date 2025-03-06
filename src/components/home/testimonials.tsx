import React from "react";
import { Links } from "../ui/links";
import { ArrowIcon, StarIcon } from "../svg";
import { testimonialList } from "./home-data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <section className="width">
        <div className="border-l border-r border-t padding py-16 md:flex md:gap-x-14 md:justify-between md:items-center bg-accent">
          <div className="">
            <p className="px-4 py-2 bg-muted text-heading w-fit rounded-md font-medium">
              What Our Readers Say
            </p>
            <h1 className="text-4xl font-bold text-heading mt-4">
              Real Words from Real Readers
            </h1>
          </div>
          <Links
            href={"/"}
            variant={"outline"}
            className="mt-10 md:mt-0 bg-background hover:bg-muted group hover:translate-x-1 hover:-translate-y-1"
          >
            View All Testimonials
            <ArrowIcon className="group-hover:rotate-0 animated" />
          </Links>
        </div>
        <div className="border-l border-r border-t pb-10 lg:pb-14 padding grid lg:grid-cols-3 gap-y-8 gap-4 ">
          {testimonialList.map(({ comment, location, name, src }, index) => (
            <div key={index} className="grid grid-rows-2">
              <div className="flex items-center justify-center gap-3 ">
                <div className="size-20 overflow-hidden rounded-full bg-secondary shrink-0 ">
                  <Image
                    src={src}
                    alt="profile picture"
                    height={80}
                    width={80}
                    className="size-full object-cover object-center"
                  />
                </div>
                <div className="">
                  <p className="text-heading text-base md:text-lg font-medium">
                    {name}{" "}
                  </p>
                  <p className="text-light">{location} </p>
                </div>
              </div>
              <div className="bg-accent max-w-sm mx-auto px-5 py-6 relative border rounded-md ">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-muted px-3 py-2 rounded-full border flex gap-1">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p>{comment} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
