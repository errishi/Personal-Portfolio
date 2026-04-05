import React, { useState } from 'react';
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
        const formData = new FormData();
        formData.append("access_key", "767870a1-87ef-4946-9feb-4ad975513382");
        formData.append("Name", inputValue.Name);
        formData.append("Email", inputValue.Email);
        formData.append("Website", inputValue.Website);
        formData.append("Message", inputValue.Message);

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
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue(preData => ({
            ...preData, [name] : value
        }));
    };

    return (
        <div id='contact' className='bg-linear-to-b from-transparent via-slate-950 to-slate-900 py-20'>
            <div className='lg:mx-15 mx-8'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h1 className='font-bold lg:text-5xl text-3xl text-white mb-4 relative inline-block'>
                        GET IN TOUCH
                        <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full'></div>
                    </h1>
                </motion.div>

                <div className='grid lg:grid-cols-2 gap-12 mt-12'>
                    {/* Left Side - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className='space-y-8'
                    >
                        <div>
                            <h2 className='text-3xl font-bold text-white mb-4'>Let's talk for <br />Something special!</h2>
                            <p className='text-gray-400 leading-relaxed text-base'>Passionate about building exceptional web experiences. I create seamless, dynamic, and visually stunning web applications from start to finish. Whether you have a project in mind or just want to chat, I'm always excited to connect with fellow developers and creatives.</p>
                        </div>

                        {/* Contact Methods */}
                        <div className='space-y-4'>
                            <div className='flex gap-4 items-start'>
                                <i className='fa-solid fa-envelope text-cyan-400 text-xl mt-1 shrink-0'></i>
                                <div>
                                    <p className='text-gray-400 text-sm font-semibold'>Email</p>
                                    <p className='text-white text-base'>singhrishikesh505@gmail.com</p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <i className='fa-solid fa-phone text-cyan-400 text-xl mt-1 shrink-0'></i>
                                <div>
                                    <p className='text-gray-400 text-sm font-semibold'>Phone</p>
                                    <p className='text-white text-base'>+91 7704887523</p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <i className='fa-solid fa-map-location-dot text-cyan-400 text-xl mt-1 shrink-0'></i>
                                <div>
                                    <p className='text-gray-400 text-sm font-semibold'>Location</p>
                                    <p className='text-white text-base'>India</p>
                                </div>
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className='bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4'>
                            <p className='text-cyan-400 text-sm font-semibold mb-2'>⚡ Response Time</p>
                            <p className='text-gray-300 text-sm'>I typically respond within 24 hours. Looking forward to hearing from you!</p>
                        </div>

                        {/* Social Media Icons for Mobile */}
                        <div className='lg:hidden flex md:justify-start justify-center gap-8 mt-10 pt-8 border-t border-slate-700'>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href='https://github.com/errishi'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-400 hover:text-cyan-400 transition-colors'
                            >
                                <i className='fab fa-github text-2xl'></i>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href='https://www.linkedin.com/in/er-rishikesh-singh/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-400 hover:text-cyan-400 transition-colors'
                            >
                                <i className='fab fa-linkedin text-2xl'></i>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href='https://x.com/Rishi2027'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-400 hover:text-cyan-400 transition-colors'
                            >
                                <i className='fab fa-twitter text-2xl'></i>
                            </motion.a>
                            <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href='https://discord.com/users/rishikesh_24'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-400 hover:text-cyan-400 transition-colors'
                                >
                                    <i className='fab fa-discord text-2xl'></i>
                                </motion.a>
                        </div>

                        {/* Social Media Icons */}
                            <div className='hidden lg:flex justify-center gap-8 mt-10 pt-8 border-t border-slate-700'>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href='https://github.com/errishi'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-400 hover:text-cyan-400 transition-colors'
                                >
                                    <i className='fab fa-github text-2xl'></i>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href='https://www.linkedin.com/in/er-rishikesh-singh/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-400 hover:text-cyan-400 transition-colors'
                                >
                                    <i className='fab fa-linkedin text-2xl'></i>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href='https://x.com/Rishi2027'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-400 hover:text-cyan-400 transition-colors'
                                >
                                    <i className='fab fa-twitter text-2xl'></i>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2 }}
                                    href='https://discord.com/users/rishikesh_24'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-400 hover:text-cyan-400 transition-colors'
                                >
                                    <i className='fab fa-discord text-2xl'></i>
                                </motion.a>
                            </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='bg-slate-800/40 border border-slate-700 rounded-2xl p-8'>
                            <h2 className='text-2xl font-bold text-white mb-3 tracking-widest'>Contact</h2>
                            <p className='text-gray-400 text-sm mb-8'>Send me your message and I'll get back to you soon.</p>

                            <form onSubmit={onSubmit} className='space-y-5'>
                                {/* Name Input */}
                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Name</label>
                                    <input
                                        type='text'
                                        name='Name'
                                        value={inputValue.Name}
                                        onChange={handleChange}
                                        placeholder='Your Name'
                                        className='w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors'
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Email</label>
                                    <input
                                        type='email'
                                        name='Email'
                                        value={inputValue.Email}
                                        onChange={handleChange}
                                        placeholder='Your Email'
                                        className='w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors'
                                        required
                                    />
                                </div>

                                {/* Website Input */}
                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Website (Optional)</label>
                                    <input
                                        type='text'
                                        name='Website'
                                        value={inputValue.Website}
                                        onChange={handleChange}
                                        placeholder='Your Website'
                                        className='w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors'
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label className='block text-gray-300 text-sm font-semibold mb-2'>Message</label>
                                    <textarea
                                        name='Message'
                                        value={inputValue.Message}
                                        onChange={handleChange}
                                        placeholder='How can I help?*'
                                        rows='3'
                                        className='w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none'
                                        required
                                    ></textarea>
                                </div>

                                {/* Send Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)' }}
                                    whileTap={{ scale: 0.98 }}
                                    type='submit'
                                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 mt-6 cursor-pointer'
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;