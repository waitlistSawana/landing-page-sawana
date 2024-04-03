import React from 'react'
import MaxWidthWrapper from './wrappers/MaxWidthWrapper'

const Footer = () => {
  return (
    <div className='h-24 md:h-24 w-full flex items-center bg-zinc-800'>
      <MaxWidthWrapper className='text-zinc-300'>
        <div>links</div>
        <div>products</div>
        <div>@2024 @sawana All right reserved </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer