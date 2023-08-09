'use client'
import React from 'react'
import './button.css';


export const Button = ({btnText , btnVariant, onClick, btnIcon, btnIcon2, btnText2}) => {

    
    return ( 
       
    <div className='main-button'>
        <button className={btnVariant} onClick = {onClick} >
            {btnIcon}
            {btnText}
        <div className="button-content">
            {btnIcon2}
            {btnText2}
        </div>
        
            
        
        
        
    </button>
    
    </div>
    )
  };
  
  export default Button;