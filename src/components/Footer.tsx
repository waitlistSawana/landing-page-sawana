import React from 'react'
import MaxWidthWrapper from './wrappers/MaxWidthWrapper'

import { OGs } from '@/lib/data/ogs'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-24 md:h-24 w-full flex items-center bg-zinc-800'>
      <MaxWidthWrapper className='text-zinc-300'>
        <div className='flex flex-row justify-center gap-3'>
          {OGs.map((og, index)=>(
            <Link key={index} href={og.url} className='min-w-10'>
              <div className='hover:underline decoration-violet-500 hover:text-purple-500'>{og.platform}</div>
            </Link>
          ))}
        </div>
        <div>products</div>
        <div>@2024 @sawana All right reserved </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer