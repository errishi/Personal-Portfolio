import React from 'react'

const Card = ({ image, name }) => {
    return (
        <div className='flex w-[130px] h-[150px] items-center justify-center text-center flex-col border-2 p-8 rounded mt-10'>
            <img src={image} alt="skill-icon" />
            <h3 className='font-medium'>{name}</h3>
        </div>
    )
}

export default Card;