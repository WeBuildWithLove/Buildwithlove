import React from 'react'
import Button from '../Global/Button'

function HomeHero() {
  return (
    <div className='space-y-[10px] lg:space-y-[20px] font-manrope py-[50px] flex flex-col items-center justify-center'>
        <p className='leading-[30px] lg:leading-[75px] font-[800] text-[24px] lg:text-[70px] text-center text-typography2'>Elevate Your <span className=' text-primary'>Business</span> with <br className='hidden lg:block' /> Stunning Digital Solutions</p>
        <p className='text-center text-[12px] lg:text-[16px] px-[10px]'>Welcome to Build With Love – where we create beautifully crafted websites and full  web applications for <br className='hidden lg:block' /> businesses of all sizes. Empower your online presence with our  expert services.</p>
        <div className="w-[160px] lg:w-[220px]">
          <Button type="filled" text="START PROJECT" fill="#4B0082" />
        </div>
    </div>
  )
}

export default HomeHero