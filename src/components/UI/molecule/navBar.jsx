'use client'
import React from 'react'
import './navBar.css'
import Button from '../atom/button'
import Logo from '../atom/logo'
import Link from 'next/link'
import '../../../../styles/globals.css'
import { useEffect } from 'react'

const NavBar = () => {
  useEffect(() => {
    // const body = document.body;
    // let lastScroll = 0;

    // const handleScroll = () => {
    //   const currentScroll = window.scrollY;

    //   if (currentScroll <= 0) {
    //     body.classList.remove("scroll-up");
    //   } else if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    //     body.classList.remove("scroll-up");
    //     body.classList.add("scroll-down");
    //   } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    //     body.classList.remove("scroll-down");
    //     body.classList.add("scroll-up");
    //   }

    //   lastScroll = currentScroll;
    // };

    // window.addEventListener("scroll", handleScroll);

    
    // const buttons = document.querySelectorAll(".default");

    // const handleClick = (event) => {
    //   buttons.forEach((btn) => btn.classList.remove("active"));
    //   event.target.classList.add("active");
    // };

    // buttons.forEach((button) => {
    //   button.addEventListener("click", handleClick);
    // });
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

    //window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      //window.removeEventListener("scroll", handleScroll);
      // buttons.forEach((button) => {
      //   button.removeEventListener("click", handleClick);
      // });
    };
  }, []); 

  
      // useEffect(() => {
      //   const headerElement = document.querySelector('header');
    
      //   const handleScroll = () => {
      //     const isScrollDown = window.scrollY > 50;
      //     if (isScrollDown) {
      //       headerElement.classList.add('active-navbar');
      //     } 
      //     else if(isScrollDown < 50){
      //       headerElement.classList.remove('active-navbar');
      //     }
      //   };
    
      //   window.addEventListener('scroll', handleScroll);
    
      //   return () => {
      //     window.removeEventListener('scroll', handleScroll);
      //   };
      // }, []);
    
    return (
    <header >
        <div className='inner-flex'>
           <div><Logo /></div>
        <nav>
            <Link href="/gallery" className='active'>
            <Button btnText={'Gallery'} btnVariant={'default'}/>
            </Link>
            <Link href="/" className='active'> 
            <Button btnText={'Home'} btnVariant={'default'}/>
            </Link>
            <Link href="/about" className='active'> 
            <Button btnText={'About'} btnVariant={'default'}/>
            </Link>
            <Link href="/specs" className='active'> 
            <Button btnText={'Hardware'} btnVariant={'default'}/>
            </Link>
        </nav>
        </div>
    </header>

  
  )
}

export default NavBar