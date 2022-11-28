import React from 'react'
import { displayGrid } from '../../util/bingoize.js';

/* A component that display a grid of 5*15 squares 
   In each square there is a number from 1 to 75.
   When the number is drawn, it changes color 
   
   1. Create a grid of 5*15 
   2. The grid call a function that will populate an array with number 1 to 75 and return it to the render
   3. The render map the array to display the numbers*/ 

export const BingoGrid = () => {

    const populateGrid = () => {
        const gridNumbers =  [];
        for (let num=1; num<76; num++) {
            switch (num) {
                case 1:
                    gridNumbers.push('B')
                    gridNumbers.push(num);
                    break;
                case 16:
                    gridNumbers.push('I')
                    gridNumbers.push(num);
                    break;
                case 31:
                    gridNumbers.push('N')
                    gridNumbers.push(num);
                    break;
                case 46:
                    gridNumbers.push('G')
                    gridNumbers.push(num);
                    break;
                case 61:
                    gridNumbers.push('O')
                    gridNumbers.push(num);
                    break;
                default:
                    gridNumbers.push(num);
                    break;
            }
        }
        return gridNumbers;
    }


    return (
        <div className='bingo-grid'>
            {
                displayGrid(populateGrid())
            }
        </div>
    )
}

