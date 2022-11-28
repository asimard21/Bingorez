import React from "react";
import { useNavigate } from 'react-router-dom'
import { displayGrid, generateBingoCard } from "../util/bingoize.js";

export const BingoCard = () => {

    const navigate = useNavigate();
    
    const onClick = ({target}) => {
        target.classList.toggle('active-grid')
    }

    const newCard = () => {
        navigate(0);
    }

    return (
        <div className='center-flex all-height flex-column'>
            <div className='bingo-card'>
            {
                displayGrid(generateBingoCard(), onClick)
            }
            </div>
            <button className='new-card' onClick={newCard}>nouvelle carte</button>
        </div>
    )
}