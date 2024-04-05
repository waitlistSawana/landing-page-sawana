import React from "react";
import MaxWidthWrapper from "./wrappers/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          {/* logo */}
          <div>
            <Link href="/" className="flex z-40 font-semibold">
              <Image src='vercel.svg' alt="logo of website" width={120} height={120}/>
            </Link>
          </div>
          <div className="flex gap-3 items-center">
            {/* menu */}
            <div className="md:block hidden">
              <div className="flex gap-3 mr-4" >
                <div>
                  <Link href='/#'>
                    <span>docs</span>
                  </Link>
                </div>
                <div>
                  <Link href='/#'>
                    <span>pricing</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* get start */}
            <div className="">
              <Link href='/#'>
                <Button>
                  <span className="text-base">Get Started</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
