import {CartIcon} from '../icons';
import { useSelector } from 'react-redux'; 

import React from 'react'

const Navbar=()=> {
    const {amount}= (useSelector((state)=>state.cart.amount))
  return (
    <nav>
        <div className='nav-center'>
        <h3>redux toolkit </h3>
        <div className='nav-container'>
            <CartIcon/>
            
            <div className='amount-container'>
                <p className='total-amount'> 0</p>
            </div>
        </div>
        </div>
    </nav>
    
  )
}

export default Navbar