import FQA from "@/components/home/FQA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Show from "@/components/home/Show";

export default function Home() {
  return (
    <div>
      <Hero />
      <Show />
      <Features />
      <Pricing />
      <FQA />
    </div>
  );
}
