import { Button } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between sticky top-0 bg-white/30 py-3 z-10 lg:px-15 px-8 items-center backdrop-blur-sm shadow-sm'>
        <img src="/Logo.png" className='w-[120px]' alt="logo" />
        <div className='w-1/3 md:w-75 hidden lg:block md:block'>
            <ul className='flex justify-between font-bold'>
                <li className='hover:opacity-70 transition-all cursor-pointer'>About Me</li>
                <li className='hover:opacity-70 transition-all cursor-pointer'>Skills</li>
                <li className='hover:opacity-70 transition-all cursor-pointer'>Projects</li>
                <li className='hover:opacity-70 transition-all cursor-pointer'>Contact Me</li>
            </ul>
        </div>
        <div id='navbtn' className='shadow-lg shadow-black/50'>
            <Button variant="contained">Resume &nbsp; <i class="fa-solid fa-download"></i></Button>
        </div>
    </div>
  )
}

export default Navbar;