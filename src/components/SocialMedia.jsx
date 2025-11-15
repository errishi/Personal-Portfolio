import React from 'react'

const SocialMedia = () => {
  return (
    <div className='lg:mx-15 mx-8 lg:-mt-15 mb-7 -mt-5'>
        <ul className='flex gap-5 justify-center lg:justify-start'>
            <li className='border-2 p-1.5 rounded cursor-pointer hover:opacity-70 transition-all'>
                <img src="linkedin.svg" className='lg:w-6 md:w-6 w-4' alt="linkedin" />
            </li>
            <li className='border-2 p-1.5 rounded cursor-pointer hover:opacity-70 transition-all'>
                <img src="github.svg" className='lg:w-6 md:w-6 w-4' alt="github" />
            </li>
            <li className='border-2 p-1.5 rounded cursor-pointer hover:opacity-70 transition-all'>
                <img src="twitter.svg" className='lg:w-6 md:w-6 w-4' alt="twitter" />
            </li>
            <li className='border-2 p-1.5 rounded cursor-pointer hover:opacity-70 transition-all'>
                <img src="discort.svg" className='lg:w-6 md:w-6 w-4' alt="discort" />
            </li>
        </ul>
    </div>
  )
}

export default SocialMedia;