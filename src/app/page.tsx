import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <div className="h-[10vh]"></div>
      <Pricing />
    </div>
  );
}
