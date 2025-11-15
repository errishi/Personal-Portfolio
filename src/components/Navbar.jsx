import { Button } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between lg:mx-15 mx-8 my-3 items-center'>
        <img src="/Logo.png" alt="logo" />
        <div className='w-1/3 md:w-75 hidden lg:block md:block'>
            <ul className='flex justify-between font-bold'>
                <li>About Me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        </div>
        <div>
            <Button variant="contained">Resume &nbsp; <i class="fa-solid fa-download"></i></Button>
        </div>
    </div>
  )
}

export default Navbar;