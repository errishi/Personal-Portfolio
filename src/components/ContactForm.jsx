import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SocialMedia from './SocialMedia';
import { toast } from 'react-toastify';
import * as motion from "motion/react-client";

const ContactForm = () => {
    const initialData = {
        Name: '',
        Email: '',
        Website: '',
        Message: ''
    };

    const [inputValue, setInputValue] = useState(initialData);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "767870a1-87ef-4946-9feb-4ad975513382");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if(data.success){
            toast.success(data.message);
            setInputValue(initialData);
        }else{
            toast.error(data.message);
            setInputValue(initialData);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputValue(preData => ({
            ...preData, [name] : value
        }));
    };

    return (
        <form id='contact' onSubmit={onSubmit} className='flex justify-between flex-col lg:flex-row md:flex-row lg:mx-15 mx-8 my-3'>
            <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}

            className='lg:w-[40%] md:w-[40%] w-full'>
                <TextField id="outlined-basic" name='Name' value={inputValue.Name} onChange={handleChange} required fullWidth size='small' label="Your Name" variant="outlined" />
                <TextField id="outlined-basic" type='email' name='Email' value={inputValue.Email} onChange={handleChange} required fullWidth size='small' margin='normal' label="Your Email" variant="outlined" />
                <TextField id="outlined-basic" name='Website' value={inputValue.Website} onChange={handleChange} fullWidth size='small' margin='dense' label="Website (if exist)" variant="outlined" />
                <TextareaAutosize
                    required
                    value={inputValue.Message}
                    onChange={handleChange}
                    name='Message'
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="How can I help?*"
                    style={{ width: "100%" }}
                    className='border rounded px-3 py-2 my-3 border-gray-400'
                />
                <div className='shadow-lg shadow-black/50 w-fit'>
                    <Button type='submit' id='submit-btn' variant="contained">Get In Touch</Button>
                </div>
                <div className='lg:mt-6.5 mt-12 lg:ml-35 md:-ml-15 -ml-35'>
                    <SocialMedia />
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            
            className='lg:w-[50%] md:w-[50%] w-full mt-10 lg:mt-0 md:mt-0'>
                <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl mb-5'>Let's <span>talk</span> for <br />Something special!</h1>
                <p className='mt-5 text-gray-500 opacity-[0.7] text-[13px] lg:text-[15px] md:text-[15px]'>Passionate about building exceptional web experiences. I create seamless, dynamic, and visually stunning web applications from start to finish.</p>
                <p className='flex gap-3 my-5'>
                    <img src="/mail.svg" className='w-7' alt="mail" /> <p>singhrishikesh505@gmail.com</p>
                </p>
                {/* <p className='flex gap-3 my-5'>
                    <img src="/phone.svg" className='w-7' alt="mail" /> <p>+91 - 7704887523</p>
                </p> */}
            </motion.div>
        </form>
    )
}

export default ContactForm;