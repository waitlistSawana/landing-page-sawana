import React from "react";
import MaxWidthWrapper from "./wrappers/MaxWidthWrapper";
import Link from "next/link";

import Image from "next/image";
import logoSVG from "../../public/vercel.svg";

import { Button } from "./ui/button";

import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="max-w-screen-3xl">
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          {/* logo */}
          <div>
            <Link
              href="/"
              className="flex z-40 font-semibold w-[30vw] justify-start"
            >
              <Image
                src={logoSVG}
                alt="logo of website"
                width={120}
                height={120}
              />
            </Link>
          </div>
          {/* menu */}
          <div className="md:block hidden w-[30vw]">
            <div className="flex justify-center">
              <div>
                <Link href="#Features">
                  <Button variant={"ghost"}>Features</Button>
                </Link>
              </div>
              <div>
                <Link href="#Pricing">
                  <Button variant={"ghost"}>Pricing</Button>
                </Link>
              </div>
              <div>
                <Link href="#FQA">
                  <Button variant={"ghost"}>FQA</Button>
                </Link>
              </div>
            </div>
          </div>
          {/* get start */}
          <div className="w-[30vw] flex justify-end">
            <Link href="/login">
              <Button size={"lg"} className="group rounded-full">
                <span className="text-base">Get Started </span>
                <span className="ml-1 group-hover:translate-x-1 transition-all duration-150">
                  <ArrowRight />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
