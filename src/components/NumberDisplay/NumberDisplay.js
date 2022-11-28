import React from 'react';
import { motion } from 'framer-motion';

/* This component takes a number as a props and display it */

export const NumberDisplay = (props) => {
    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.5}}className='number-display' key={props.currentNumber}><h1 className='number'>{props.currentNumber}</h1></motion.div>
    )
}