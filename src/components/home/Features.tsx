'use client'

import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Aperture, AreaChart, ArrowDownUp, LayoutTemplate, Palette, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Palette size={50} color="black"/>,
    iconside: "Customizable Design",
    titel: "Personalize Your Brand Space",
    describe:
      "Easily tailor your page design to reflect your brand's unique identity, ensuring a consistent and impactful user experience.",
  },
  {
    icon: <LayoutTemplate size={50} color="black"/>,
    iconside: "Responsive Layouts",
    titel: "Mobile-Friendly & Adaptive Design",
    describe:
      "Your page automatically adjusts for any screen size, providing a flawless experience on every device.",
  },
  {
    icon: <ArrowDownUp size={50} color="black"/>,
    iconside: "Instant Integration",
    titel: "Streamline Your Workflow",
    describe:
      "Effortlessly connect with your preferred tools and services to streamline your online operations.",
  },
  {
    icon: <Aperture size={50} color="black"/>,
    iconside: "SEO Optimized Structure",
    titel: "Boost Your Search Engine Ranking",
    describe:
      "Attract more organic traffic with built-in SEO features that enhance your page's visibility.",
  },
  {
    icon: <AreaChart size={50} color="black"/>,
    iconside: "High-Performance Analytics",
    titel: "Track & Optimize for Success",
    describe:
      "Gain key insights to optimize your page performance and boost conversions.",
  },
  {
    icon: <ShieldCheck size={50} color="black"/>,
    iconside: "Secure Hosting Integration",
    titel: "Protect Your Data & Users",
    describe:
      "Keep your data secure with our reliable hosting integration, safeguarding user trust.",
  },
];

const Features = () => {
  return (
    <MaxWidthWrapper className="">
      <div id="Features"></div>

      <div className="h-[10vh]"></div>

      {/* head */}
      <div className="mb-3 md:mb-6">
        <div className="mb-3 font-bold text-purple-700 text-4xl md:text-5xl">
          Features
        </div>
        <div className="font-semibold text-lg md:text-lg">
          Why Landing-Page-Sawana
        </div>
        <div className="mb-3 text-base">
          Increases productivity by reducing repetitive processes and freeing up
          time for high-value activities
        </div>
      </div>
      {/* main */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full ">
        {features.map((feature, index) => (
          <Card key={index} className="rounded-2xl shadow flex flex-col hover:border-purple-400 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="mx-auto">
                {feature.icon}
              </div>
              <CardTitle className="text-zinc-800 text-xl">{feature.iconside}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>{feature.describe}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Features;
