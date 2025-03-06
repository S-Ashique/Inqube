import React from "react";
import {
  blogsList,
  homeList,
  newsList,
  podcastsList,
  resourcesList,
  TList,
} from "./footer-data";
import Link from "next/link";
import { Links } from "../ui/links";
import { ArrowIcon, LinkdInIcon, MediumIcon, TwitterIcon } from "../svg";
import { cn } from "@/lib/utils";

const Footer = () => {

  return (
    <>
      <footer className="width border">
        <div className="padding py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <NavLinks list={homeList} title="Home" />
          <NavLinks list={newsList} title="News" />
          <NavLinks list={blogsList} title="Bolgs" />
          <NavLinks list={podcastsList} title="Podcasts" />
          <NavLinks
            list={resourcesList}
            title="Resources"
            outline
            className="col-span-full md:col-span-2 lg:col-span-1"
          />
        </div>
        <div className="padding ">
          <div className="border-t py-10 flex flex-col md:flex-row md:justify-between items-center ">
            <div className="flex gap-4 items-center md:order-2">
              <Link href={"/"}>
                <TwitterIcon />
              </Link>
              <Link href={"/"}>
                <MediumIcon />
              </Link>
              <Link href={"/"}>
                <LinkdInIcon />
              </Link>
            </div>
            <p className="divide-x-1 mt-6 md:mt-0 md:order-1 ">
              <span>Terms & Conditions </span>
              <span className="ps-1 "> Privacy Policy </span>
            </p>
            <p className="mt-2 md:mt-0 md:order-3">
              &copy; {new Date().getFullYear()} Blogg. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const NavLinks = ({
  list,
  title,
  className,
  outline,
}: {
  list: TList;
  title: string;
  className?: string;
  outline?: boolean;
}) => {
  return (
    <>
      <div className={className}>
        <p className="text-base font-medium text-heading">{title} </p>
        <div
          className={cn(
            "flex  mt-3",
            outline
              ? "flex-row flex-wrap gap-4 lg:flex-col lg:items-start"
              : "flex-col gap-2"
          )}
        >
          {list.map(({ href, label, newLink }) =>
            outline ? (
              <Links key={label} href={href} variant={"outline"}>
                {label}
                <ArrowIcon />
              </Links>
            ) : (
              <Link key={label} href={href} className="flex items-center gap-2 hover:text-heading hover:font-medium animated">
                {label}
                {newLink && (
                  <span className="px-1 py-0.5 bg-muted text-heading inline-block rounded-md text-xs">
                    New
                  </span>
                )}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};
