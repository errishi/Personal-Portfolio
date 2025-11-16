import React from 'react';
import * as motion from "motion/react-client";

const Card = ({ image, name }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className='flex w-[130px] h-[150px] items-center justify-center text-center flex-col border-2 p-8 rounded mt-10 shadow-xl'>
            <img src={image} alt="skill-icon" />
            <h3 className='font-medium'>{name}</h3>
        </motion.div>
    )
}

export default Card;