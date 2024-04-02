import React from 'react'
import MaxWidthWrapper from './wrapper/MaxWidthWrapper'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between border-b border-zinc-200'>
          {/* logo */}
          <div>
            <Link
              href='/'
              className='flex z-40 font-semibold'>
              <span>FastStart.</span>
            </Link>
          </div>
          {/* menu */}
          <div>menus</div>
          {/* get start */}
          <div>login / get start</div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar