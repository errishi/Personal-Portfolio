import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white lg:px-15 md:px-8 px-5 py-5 flex justify-between'>
        <img src="/footer-logo.png" className='w-[150px]' alt="logo" />
        <div className='text-end'>
            <p className='text-[12px]'>@{new Date().getFullYear()} Personal Portfolio</p>
            <p className='lg:text-[12px] md:text-[12px] text-[11px]'>Made with ❤️ By <span className='lg:text-[15px] md:text-[15px] text-[13px]'>Rishikesh Singh</span></p>
        </div>
    </div>
  )
}

export default Footer;