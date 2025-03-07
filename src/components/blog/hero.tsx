import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="width relative ">
        <div className="h-96 [mask-image:linear-gradient(to_bottom,black_30%,transparent)] border-r border-l ">
          <Image
            src={"/blog/image_one.png"}
            alt="hero image"
            height={720}
            width={1080}
            className="size-full object-center object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-heading absolute bottom-4 w-full padding text-balance md:text-center">
          The Rise of Artificial Intelligence in Healthcare
        </h1>
      </section>
    </>
  );
};

export default Hero;
