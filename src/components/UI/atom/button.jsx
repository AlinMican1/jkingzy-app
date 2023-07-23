'use client'
import React from 'react'
import './button.css';
import Reveal from '@/components/animations/reveal';

export const Button = ({btnText ,btnTexth1, btnTextp,btnVariant, onClick, btnIcon}) => {

    
    return ( 
       
    <div className='main-button'>
        <button className={btnVariant} onClick = {onClick} >
        {btnIcon}
        {btnText}
        {/* Additional costums */}
        {/* <h1>{btnTexth1}</h1>
        <p>{btnTextp}</p> */}
        
    </button>
    
    </div>
    )
  };
  
  export default Button;