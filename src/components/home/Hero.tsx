import React from 'react'
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import Link from 'next/link';

const Hero = () => {
  return (
    <MaxWidthWrapper className="h-[calc(100vh-22vh)] mt-16 sm:mt-32 flex-col items-center justify-center ">
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
          Create and launch a stunning website homepage in a matter of minutes. 
          Say goodbye to the time-consuming process of setting up from an empty folder, and hello to a streamlined experience that gets you online quickly and with style.
        </p>

        <div className="mx-auto mb-4 mt-4 sm:mt-6 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <Link href='/#'>
            Get started
          </Link>
        </div>

        <div>
          og
        </div>

        <div>
          向下的弹动箭头
        </div>

        {/* 背景彩色装饰 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top40 -z-10 teansform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -reanslate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

      </MaxWidthWrapper>
  )
}

export default Hero