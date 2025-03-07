import React from "react";
import { detailsList, tableOfContent } from "./blog-data";
import { cn } from "@/lib/utils";
import { ArrowIcon,  EyeIcon, LikeIcon, ShareIcon } from "../svg";

const BlogNews = () => {
  return (
    <>
      <section className="width grid lg:grid-cols-12 gap-px bg-border border-r border-l border-t">
        <ColumnOne className="lg:col-span-7 xl:col-span-8 order-2 " />
        <ColumnTwo className="lg:col-span-5 xl:col-span-4 order-1  " />
      </section>
    </>
  );
};

export default BlogNews;

const ColumnOne = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative ", className)}>
      <div className="bg-background padding py-10">
        <p className="text-heading font-medium text-lg">Introduction</p>
        <p className="mt-4">
          Artificial Intelligence (AI) has emerged as a transformative force in
          the healthcare industry, reshaping patient care, diagnostics, and
          research. In this blog post, we explore the profound impact of AI in
          healthcare, from revolutionizing diagnostic accuracy to enhancing
          patient outcomes.
        </p>
      </div>
      <div className="bg-background padding py-10 mt-px [mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        <p className="text-heading font-medium text-lg">
          Artificial Intelligence (AI)
        </p>
        <p className="mt-4">
          Artificial Intelligence (AI) has permeated virtually every aspect of
          our lives, and healthcare is no exception. The integration of AI in
          healthcare is ushering in a new era of medical practice, where
          machines complement the capabilities of healthcare professionals,
          ultimately improving patient outcomes and the efficiency of the
          healthcare system. In this blog post, we will delve into the diverse
          applications of AI in healthcare, from diagnostic imaging to
          personalized treatment plans, and address the ethical considerations
          surrounding this revolutionary technology.
        </p>
        <p className="mt-4">
          Artificial Intelligence (AI) has permeated virtually every aspect of
          our lives, and healthcare is no exception. The integration of AI in
          healthcare is ushering in a new era of medical practice, where
          machines complement the capabilities of healthcare professionals,
          ultimately improving patient outcomes and the efficiency of the
          healthcare system. In this blog post, we will delve into the diverse
          applications of AI in healthcare, from diagnostic imaging to
          personalized treatment plans, and address the ethical considerations
          surrounding this revolutionary technology.
        </p>
        <p className="text-heading font-medium text-lg mt-6">
          Predictive Analytics and Disease Prevention
        </p>
        <p className="mt-4">
          One of the most prominent applications of AI in healthcare is in
          diagnostic imaging. AI algorithms have demonstrated remarkable
          proficiency in interpreting medical images such as X-rays, MRIs, and
          CT scans. They can identify anomalies and deviations that might be
          overlooked by the human eye. This is particularly valuable in early
          disease detection. For instance, AI can aid radiologists in detecting
          minute irregularities in mammograms or identifying critical findings
          in chest X-rays, potentially indicative of life-threatening
          conditions.
        </p>
      </div>
      <button className="absolute bottom-4 bg-accent border left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-2 gap-2 font-medium text-sm border-muted rounded-md">
        Read Full Blog{" "}
        <ArrowIcon className="fill-light stroke-light rotate-135 size-4" />{" "}
      </button>
    </div>
  );
};

const ColumnTwo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="bg-background padding py-10">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
            <LikeIcon className="fill-red stroke-red" />
            <span className="text-sm"> 24.5K</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
            <EyeIcon className="stroke-light size-4" />
            <span className="text-sm"> 50K </span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 border rounded-full bg-accent">
            <ShareIcon /> <span className="text-sm"> 206</span>
          </div>
        </div>
      </div>
      <div className="bg-background padding py-10 mt-px h-full ">
        <div className="flex flex-wrap gap-y-4 gap-x-8">
          {detailsList.map(({ text, title }) => (
            <div key={title} className="shrink-0">
              <p className="text-light">{title}</p>
              <p className="font-medium text-heading mt-1">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-light">Table of Contents</p>
          <div className=" mt-4 bg-accent py-6 rounded-md px-2 max-w-md">
            <ul className="padding space-y-2">
              {tableOfContent.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
