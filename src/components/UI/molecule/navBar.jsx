'use client'
import React from 'react'
import './navBar.css'
import Button from '../atom/button'
import Logo from '../atom/logo'
import Link from 'next/link'
import '../../../../styles/globals.css'
import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
    });

    const buttons = document.querySelectorAll(".default");

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove the "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    // Add the "active" class to the clicked button
    button.classList.add("active");
  });
});
    
    return (
    
    // <div className='nav-container'>
    //     <div className='nav-container2'></div>
    //     {/* <div className='line'></div> */}
    //     <div className='button-wrapper'>
    //         <Link href='/about'>
    //         <Button btnText={'About'} btnVariant={'default'} btnLink={'/About'} />
    //         </Link> 
    //         <Link href='/gallery'>
    //         <Button btnText={'Gallery'} btnVariant={'default'}/>
    //         </Link>
    //         <Link href='/'>
    //         <Logo />
    //         </Link>
    //         <Link href='/myPc'>
    //         <Button btnText={'Specs'} btnVariant={'default'}/>
    //         </Link>
    //         <Button btnText={'Contact'} btnVariant={'default'}/>
    //     </div>
    // </div>
    
    <header>
        <div className='inner-flex'>
           <div><Logo /></div>
        <nav>
            <Link href="/gallery" className='active'>
            <Button btnText={'Gallery'} btnVariant={'default'}/>
            </Link>
            <Link href="/" className='active'> 
            <Button btnText={'Home'} btnVariant={'default'}/>
            </Link>
            <Link href="#" className='active'> 
            <Button btnText={'Gallery'} btnVariant={'default'}/>
            </Link>
            <Link href="#" className='active'> 
            <Button btnText={'Gallery'} btnVariant={'default'}/>
            </Link>
        </nav>
        </div>
    </header>

  
  )
}

export default NavBar