import { cn } from "@/lib/utils";
import React from "react";
import { columnThreeList, counterList, profilePictures } from "./home-data";
import Image from "next/image";
import { Links } from "../ui/links";
import { ArrowIcon } from "../svg";

const Hero = () => {
  return (
    <section className="width">
      <div className="border-l border-r border-b grid md:grid-cols-12 gap-px bg-border">
        <ColumnOne className="md:col-span-7 " />
        <ColumnTwo className=" md:col-span-5 bg-background" />
        <ColumnThree className=" md:col-span-full" />
      </div>
    </section>
  );
};

export default Hero;

const ColumnOne = ({ className }: { className?: string }) => {
  return (
    <div className={cn(" grid md:grid-rows-4 gap-px", className)}>
      <div className="pt-24 pb-14 bg-background padding md:row-span-3">
        <p className="text-lg text-text-muted font-medium">
          Your Path to the Future Starts Today
        </p>
        <h1 className="text-3xl font-semibold mt-1 text-heading">
          Discover New Horizons in Artificial Intelligence
        </h1>
        <p className="mt-8 max-w-xl">
          Welcome to the hub of AI innovation. FutureTech AI News is your
          gateway to a world where machines evolve, learn, and transform the
          future.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-px md:row-span-1">
        {counterList.map(({ number, title }) => (
          <div key={number} className="bg-background px-2 py-6 text-center">
            <h1 className="text-3xl text-heading font-semibold">
              {number}
              <span className="text-primary">+</span>
            </h1>
            <p className="mt-3">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColumnTwo = ({ className }: { className?: string }) => {
  return (
    <div className={cn(" relative", className)}>
      <div className="absolute mix-blend-difference inset-0 overflow-clip [mask-image:radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.4)_10%,transparent)]">
        <Image
          src={"/herobg.svg"}
          alt="hero image"
          height={640}
          width={640}
          className="size-full object-left-top object-cover"
        />
      </div>

      <div className="px-10 pt-36 pb-14 relative">
        <div className="flex items-center -space-x-4 border  p-2 w-fit rounded-full bg-muted">
          {profilePictures.map((imageSrc, index) => (
            <div
              key={index}
              className="size-16 rounded-full bg-accent border hover:z-10 focus:z-10 overflow-hidden"
            >
              <Image
                src={imageSrc}
                alt="profile picture"
                height={64}
                width={64}
                className="size-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <p className="text-heading mt-8 text-xl font-medium">
          Explore 1000+ resources
        </p>
        <p className="mt-4">
          Explore over 1,000 articles on cutting-edge tech trends and
          breakthroughs.
        </p>
        <Links href={"/"} variant={"outline"} className="mt-2 ">
          Explore Resources <ArrowIcon />
        </Links>
      </div>
    </div>
  );
};

const ColumnThree = ({ className }: { className?: string }) => {
  return (
    <div className={cn(" grid md:grid-cols-3 gap-px", className)}>
      {columnThreeList.map(({ icon, text1, text2, title }) => (
        <div
          key={title}
          className=" bg-background px-4 py-6 flex justify-between md:justify-around items-center gap-4"
        >
          <div className="h-full grid grid-rows-3 gap-4">
            {icon}
            <div className="">
              <p className="font-medium text-heading text-lg">{title}</p>
              <p className="text-text-muted">{text1}</p>
            </div>
            <p className="">{text2}</p>
          </div>

          <Links href={"/"} size={"icon"} className="rounded-full">
            <ArrowIcon />
          </Links>
        </div>
      ))}
    </div>
  );
};
