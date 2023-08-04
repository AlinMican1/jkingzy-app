'use client'
import React from 'react'
import './button.css';


export const Button = ({btnText , btnVariant, onClick, btnIcon}) => {

    
    return ( 
       
    <div className='main-button'>
        <button className={`button ${btnVariant}`} onClick = {onClick} >
        {btnIcon}
        {btnText}
        
        
    </button>
    
    </div>
    )
  };
  
  export default Button;