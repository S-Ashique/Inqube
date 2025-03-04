"use client";
import React, { useState } from "react";
import { LogoIcon, MenuIcon, XIcon } from "../svg";
import Link from "next/link";
import { Links } from "../ui/links";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "News", href: "/" },
  { label: "Podcasts", href: "/" },
  { label: "Resources", href: "/" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="sticky width padding top-0 z-10">
        <div className="flex items-center justify-between padding py-4 h-14 md:h-16 mt-2 border bg-accent  ">
          <Link href={"/"} className="flex items-center gap-2">
            <LogoIcon className="size-6" />
            <span className="text-heading tracking-tight font-medium text-2xl">
              Blogg
            </span>
          </Link>

          <div className=" hidden md:flex gap-2 ">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex px-4 py-2 font-medium"
              >
                {label}
              </Link>
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
        <div className="fixed md:hidden top-0 z-10 w-full h-dvh overflow-y-scroll bg-background px-2 pb-4">
          <div className="flex items-center justify-between px-2 py-4 h-14  mt-2 border bg-accent ">
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
                <Link
                  key={label}
                  href={href}
                  className="inline-flex px-4 py-2 font-medium"
                >
                  {label}
                </Link>
              ))}

              <Links href={"/"} className="">
                Contact Us
              </Links>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
