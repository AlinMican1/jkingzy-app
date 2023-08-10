import React from 'react'
import './navBar.css'
import Button from '../atom/button'
import Logo from '../atom/logo'
import Link from 'next/link'
import '../../../../styles/globals.css'
import { useState, useEffect } from 'react'
import ToggleNavBar from './toggleNavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import {useWindowSize} from '../../../lib/SizeScreen-hook';
import WelcomeBox from './welcomeBox'

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [openDropNav, setDropNav] = useState(false);
  const [width, height] = useWindowSize();
  

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access localStorage only on the client side
      const storedActiveButton = localStorage.getItem('activeButton');
      setActiveButton(storedActiveButton || 'Home');
    }
  }, []);
  
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
    setDropNav(false);
    localStorage.setItem('activeButton', buttonText);
  };

  
  
  useEffect(()=>{
    
      if(width >= 901){
          setDropNav(false);
      }
  },[activeButton,width])
  useEffect(() => {
    if (openDropNav) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
      document.body.classList.remove('no-scroll');
    }
  }, [openDropNav]);
    
    
 
    return (
      
      
    <header >
        
            
        
       
        <div className='inner-flex'>
          <Link href="/" onClick={() => handleButtonClick('Home')} >
           <div><Logo /></div>
          </Link>
          
        <nav>
        <div>
            <Button btnVariant={'hamburger-icon'} btnIcon={<FontAwesomeIcon icon={faBars} />} onClick={() => setDropNav(!openDropNav)} />
            {openDropNav && <ToggleNavBar  openDropNav={openDropNav}
              setDropNav={setDropNav}
              activeButton={activeButton}
              handleButtonClick={handleButtonClick}/>}
          </div>
  
            <div className='button-toggle'>
            <Link href="/" className='active'> 
            <Button btnText={'Home'} btnVariant={activeButton === 'Home' ? 'default active' : 'default'}  onClick={() =>   handleButtonClick('Home')}/>
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
            </div>
        </nav>
        </div>
        
    </header>
    
  
  )
}

export default NavBar