import React from 'react'
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import Link from 'next/link';

const Hero = () => {
  return (
    <MaxWidthWrapper className="mb-20 mt-28 sm:mt-32 sm:mb-28 flex-col items-center justify-center ">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Fast starter is now public!
          </p>
        </div>

        <h1 className="max-w-4xl mx-auto text-5xl font-bold md:text-6xl lg:text-7xl">
          Start and ship your  <span className="text-purple-700">Clean Website</span> in
          minutes.
        </h1>
        <p className="mt-5 mx-auto max-w-prose text-zinc-700 sm:text-lg">
          Create and launch a stunning website homepage in a matter of minutes. Say goodbye to the time-consuming process of setting up from an empty folder, and hello to a streamlined experience that gets you online quickly and with style.
        </p>

        <div className="mx-auto mb-4 mt-4 sm:mt-6 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <Link href='/#'>
            Get started 
          </Link>
        </div>

      </MaxWidthWrapper>
  )
}

export default Hero