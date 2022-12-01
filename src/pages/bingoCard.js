import React from "react";
import { useNavigate } from 'react-router-dom'
import { displayGrid, generateBingoCard } from "../util/bingoize.js";

import { ReactComponent as SnowFlake1 } from '../ressources/svg/snowflake1.svg';
import { ReactComponent as SnowFlake2 } from '../ressources/svg/snowflake2.svg';

export const BingoCard = () => {

    const navigate = useNavigate();
    
    const onClick = ({target}) => {
        target.classList.toggle('active-grid')
    }

    const newCard = () => {
        navigate(0);
    }

    return (
        <>
            <div className='bingo-card-container'>
                <div className='bingo-card transparentblue-bg'>
                {
                    displayGrid(generateBingoCard(), onClick)
                }
                </div>
                <button className='new-card' onClick={newCard}>nouvelle carte</button>
            </div>
            <SnowFlake1 id='sf5'/>
            <SnowFlake2 id='sf6'/>
        </>
        
    )
}