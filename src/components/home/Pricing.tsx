import React from "react";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

import { plans } from "@/lib/data/pricing_plans_card";

const handleVariant = (variant: string) => {
  // 这个用来硬处理button的variant参数 它没法识别map遍历 应该有官方的方法
  if (variant === "default") {
    return "default";
  } else if (variant === "secondary") {
    return "secondary";
  } else if (variant === "outline") {
    return "outline";
  } else {
    return "default";
  }
};

const Pricing = () => {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center mb-5">
      <div id="Pricing"></div>

      <div className="h-[10vh]"></div>

      {/* head */}
      <div className="mb-3 md:mb-4">
        <div className="mb-3 font-bold text-purple-700 text-4xl md:text-5xl">
          Pricing
        </div>
        <div className="font-semibold text-lg md:text-lg">
          Flexible and transparent pricing
        </div>
        <div className="mb-3 text-base">
          get the features you want and a price you'll love
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full ">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow flex flex-col justify-between hover:border-purple-400 hover:shadow-lg transition-all"
          >
            <div>
              <CardHeader className="">
                <div className="text-lg text-purple-700 font-semibold">
                  {plan.title}
                </div>
                <div className="hover:scale-110 transition-all">
                  {plan.currency}{" "}
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="">
                <ul className="flex flex-col gap-1 md:gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <CardFooter className="">
              <Button
                variant={handleVariant(plan.buttonVariant)}
                className="mx-auto rounded-lg hover:ring hover:ring-purple-400 hover:scale-105 transition-all"
                asChild
              >
                <Link href={"/#"}>Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
    </MaxWidthWrapper>
  );
};

export default Pricing;
