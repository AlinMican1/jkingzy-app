'use client'
import React from 'react'
import './navBar.css'
import Button from '../atom/button'
import Logo from '../atom/logo'
import Link from 'next/link'
import '../../../../styles/globals.css'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [activeButton, setActiveButton] = useState('Home');
  useEffect(() => {
    const headerElement = document.querySelector('header');
    
    const handleScroll = () => {
      const isScrollDown = window.scrollY > 50;
      if (isScrollDown) {
        headerElement.classList.add('active-navbar');
      } 
      else if(isScrollDown < 50){
        headerElement.classList.remove('active-navbar');
      }
    };
    
   
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
     
    };
  }, []); 
  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };
  
    
    return (
    <header >
        <div className='inner-flex'>
          <Link href="/" onClick={() => handleButtonClick('Home')} >
           <div><Logo /></div>
          </Link>
        <nav>
            <Link href="/" className='active'> 
            <Button btnText={'Home'} btnVariant={activeButton === 'Home' ? 'default active' : 'default'}  onClick={() => handleButtonClick('Home')}/>
            </Link>
            <Link href="/about" className='active'> 
            <Button btnText={'About'} btnVariant={activeButton === 'About' ? 'default active' : 'default'}  onClick={() => handleButtonClick('About')}/>
            </Link>
            <Link href="/work" className='active'> 
            <Button btnText={'Work'} btnVariant={activeButton === 'Work' ? 'default active' : 'default'}  onClick={() => handleButtonClick('Work')}/>
            </Link>
            <Link href="/gallery" className='active'>
            <Button btnText={'Gallery'} btnVariant={activeButton === 'Gallery' ? 'default active' : 'default'}  onClick={() => handleButtonClick('Gallery')}/>
            </Link>
            <Link href="/specs" className='active'> 
            <Button btnText={'Hardware'} btnVariant={activeButton === 'Specs' ? 'default active' : 'default'}  onClick={() => handleButtonClick('Specs')}/>
            </Link>
        </nav>
        </div>
    </header>

  
  )
}

export default NavBar