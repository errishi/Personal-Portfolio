import React from 'react'

const SocialMedia = () => {
    return (
        <div className='lg:mx-15 mx-8 lg:-mt-15 mb-7 -mt-5'>
            <ul className='flex gap-5 justify-center lg:justify-start'>
                <a id='linkedin' href="https://www.linkedin.com/in/er-rishikesh-singh/" target='blank'>
                    <li className='border-2 p-1.5 rounded cursor-pointer transition-all shadow-md shadow-black/50'>
                        <img src="linkedin.svg" className='lg:w-6 md:w-6 w-4' alt="linkedin" />
                    </li>
                </a>
                <a id='github' href="https://github.com/errishi" target='blank'>
                    <li className='border-2 p-1.5 rounded cursor-pointer transition-all shadow-md shadow-black/50'>
                        <img src="github.svg" className='lg:w-6 md:w-6 w-4' alt="github" />
                    </li>
                </a>
                <a id='twitter' href="https://x.com/Rishi2027" target='blank'>
                    <li className='border-2 p-1.5 rounded cursor-pointer transition-all shadow-md shadow-black/50'>
                        <img src="twitter.svg" className='lg:w-6 md:w-6 w-4' alt="twitter" />
                    </li>
                </a>
                <li className='border-2 p-1.5 rounded cursor-pointer hover:opacity-70 transition-all shadow-md shadow-black/50'>
                    <img src="discort.svg" className='lg:w-6 md:w-6 w-4' alt="discort" />
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia;