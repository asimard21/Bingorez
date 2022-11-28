import React from 'react';

/* Nav bar component has X buttons 
   - A restart button
   - A next number button
*/

export const NavBar = (props) => {

    /* Function that select a text to display in the main button */
    const displayText = () => {
        if (props.currentNumber === '') {
            return 'commencer';
        } else {
            return 'nombre suivant'
        }
    }

    return (
        <div className='navbar'>
            <button onClick={props.numberSelection}>{displayText()}</button>
            <div className='logo'>
                <h1>bingo<span className='logo-white'>REZ</span></h1>
            </div>
            <button onClick={props.renitialize}>recommencer</button>
        </div>
    )
}