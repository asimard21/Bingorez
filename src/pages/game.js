import React, { useState } from 'react';
import { BingoGrid } from '../components/BingoGrid/BingoGrid.js';
import { NavBar } from '../components/NavBar/NavBar.js';
import { NumberDisplay } from '../components/NumberDisplay/NumberDisplay.js';
import { bingoize } from '../util/bingoize.js';
import { ReactComponent as SnowFlake1 } from '../ressources/svg/snowflake1.svg';
import { ReactComponent as SnowFlake2 } from '../ressources/svg/snowflake2.svg';
import { ReactComponent as SnowFlake3 } from '../ressources/svg/snowflake3.svg';

export const Game = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [drawnNumber, setDrawnNumber] = useState([]);

  /*function to randomly select a number */
  const drawNumber = () => {

    let randomNumber = 0;
    do {
        if (drawnNumber.length > 74) {
          return 
        }
        randomNumber = Math.floor(Math.random() * 75+1)
        console.log(randomNumber)
    } while(drawnNumber.includes(randomNumber))
    
    setCurrentNumber(bingoize(randomNumber));
    setDrawnNumber(previous => {
      return [...previous, randomNumber];
    })
    activateNumber(randomNumber);
  }

  /* function to change the style of the numbers that are drawn */
  const activateNumber = (number) => {
    const numString = number.toString();
    const numToActivate = document.getElementById(numString);
    numToActivate.classList.toggle('active');
  }

  /* function to renitialize the BingoGrid */
  const renitialize = () => {
    drawnNumber.forEach( number => {
      const numToRenitialize = document.getElementById(number);
      numToRenitialize.classList.toggle('active');
    })

    setDrawnNumber([]);
    setCurrentNumber('');
  }
  
  return (
    <div>
      <NavBar numberSelection={drawNumber} currentNumber={currentNumber} renitialize={renitialize} />
      <main>
        <NumberDisplay currentNumber={currentNumber} />
        <div className='grid-container transparentblue-bg'>
          <BingoGrid />
        </div>
      </main>
      <SnowFlake1 className='snowflake-bg' id='sf1'/>
      <SnowFlake2 className='snowflake-bg' id='sf2'/>
      <SnowFlake3 className='snowflake-bg' id='sf3'/>
      <SnowFlake1 className='snowflake-bg' id='sf4'/>
    </div>
  )
}