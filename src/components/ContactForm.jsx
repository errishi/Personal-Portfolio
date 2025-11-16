import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SocialMedia from './SocialMedia';

const ContactForm = () => {
    return (
        <div className='flex justify-between flex-col lg:flex-row md:flex-row lg:mx-15 mx-8 my-3'>
            <div className='lg:w-[40%] md:w-[40%] w-full'>
                <TextField id="outlined-basic" fullWidth size='small' label="Your Name" variant="outlined" />
                <TextField id="outlined-basic" fullWidth size='small' margin='normal' label="Your Email" variant="outlined" />
                <TextField id="outlined-basic" fullWidth size='small' margin='dense' label="Website (if exist)" variant="outlined" />
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="How can I help?*"
                    style={{ width: "100%" }}
                    className='border rounded px-3 py-2 my-3 border-gray-400'
                />
                <div className='shadow-lg shadow-black/50 w-fit'>
                <Button id='submit-btn' variant="contained">Get In Touch</Button>
                </div>
                <div className='lg:mt-6.5 mt-12 lg:ml-35 md:-ml-15 -ml-35'>
                    <SocialMedia />
                </div>
            </div>
            <div className='lg:w-[50%] md:w-[50%] w-full mt-10 lg:mt-0 md:mt-0'>
                <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl mb-5'>Let's <span>talk</span> for <br />Something special!</h1>
                <p className='mt-5 text-gray-500 opacity-[0.7] text-[13px] lg:text-[15px] md:text-[15px]'>Passionate about building exceptional web experiences. I create seamless, dynamic, and visually stunning web applications from start to finish.</p>
                <p className='flex gap-3 my-5'>
                    <img src="/mail.svg" className='w-7' alt="mail" /> <p>singhrishikesh505@gmail.com</p>
                </p>
                <p className='flex gap-3 my-5'>
                    <img src="/phone.svg" className='w-7' alt="mail" /> <p>+91 - 7704887523</p>
                </p>
            </div>
        </div>
    )
}

export default ContactForm;