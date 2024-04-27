import Link from "next/link";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../wrappers/MaxWidthWrapper"

import { OGs } from "@/lib/data/ogs";

export default function OGIcons() {
  return (
    <MaxWidthWrapper className="h-[12vh] py-8">
      <div className="flex justify-center items-center gpa-2">
        {OGs.map((og, index)=>(
          <Link href={og.url} target="_blank">
            <Button key={index} size={'icon'} variant={'ghost'} className="rounded-full">{og.icon}</Button>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
