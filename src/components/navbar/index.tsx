"use client";
import React, { useState } from "react";
import { LogoIcon, MenuIcon, XIcon } from "../svg";
import Link from "next/link";
import { Links } from "../ui/links";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Podcasts", href: "/" },
  { label: "Resources", href: "/" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="sticky width top-0 z-20">
        <div className="flex items-center justify-between padding py-4 h-14 md:h-16 mt-2 border bg-accent/50 backdrop-blur-md  ">
          <Link href={"/"} className="flex items-center gap-2">
            <LogoIcon className="size-6" />
            <span className="text-heading tracking-tight font-medium text-2xl">
              Blogg
            </span>
          </Link>

          <div className=" hidden md:flex gap-2">
            {navLinks.map(({ label, href }) => (
              <Links is_scale={false} key={label} href={href} variant={"link"}>
                {label}
              </Links>
            ))}
          </div>

          <Links href={"/"} className=" hidden md:inline-flex">
            Contact Us
          </Links>

          <button
            onClick={() => setShow(true)}
            className="inline-flex md:hidden"
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
      </div>
      {show && (
        <div className="fixed md:hidden top-0 z-20 w-full h-dvh overflow-y-scroll bg-background">
          <div className="width pb-4">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 h-14  mt-2 border bg-accent ">
              <Link href={"/"} className="flex items-center gap-2">
                <LogoIcon className="size-6" />
                <span className="text-heading tracking-tight font-medium text-2xl">
                  Blogg
                </span>
              </Link>
              <button onClick={() => setShow(false)} className="inline-flex ">
                <XIcon className="size-6" />
              </button>
            </div>

            <div className="border border-t-0  py-16">
              <div className="flex flex-col gap-4 items-start place-self-center">
                {navLinks.map(({ label, href }) => (
                  <Links
                    is_scale={false}
                    key={label}
                    href={href}
                    variant={"link"}
                  >
                    {label}
                  </Links>
                ))}

                <Links href={"/"} className="">
                  Contact Us
                </Links>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
