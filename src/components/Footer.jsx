import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-cyan-200 text-gray-400 lg:px-15 md:px-8 px-5 py-5 flex justify-between'>
      <p className='text-[12px]'>@{new Date().getFullYear()} All rights reserved.</p>
      <div className='text-end'>
        <p className='lg:text-[12px] md:text-[12px] text-[11px]'>Developed By <span className='lg:text-[15px] md:text-[15px] text-[13px]'>Rishikesh Singh</span></p>
      </div>
    </div>
  )
}

export default Footer;