import FQA from "@/components/home/FQA";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Show from "@/components/home/Show";

import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const t = await getDictionary(lang);

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
