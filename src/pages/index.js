import React from 'react'
import { Link } from 'react-router-dom'

export const Index = () => {
    return (
        <div className='main-container'>
            <Link to='/game'><button className='main'>Débuter une partie</button></Link>
            <Link to='/card'><button className='main'>Générer une carte</button></Link>
        </div>
    )
}