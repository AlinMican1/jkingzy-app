import React from 'react'
import './navBar.css'
import Button from '../atom/button'
import Logo from '../atom/logo'
import Link from 'next/link'
import '../../../../styles/globals.css'


const NavBar = () => {
  
    
    return (
    
    
    <div className='nav-container'>
        <div className='nav-container2'></div>
        <div className='line'></div>
        <div className='button-wrapper'>
            <Link href='/about'>
            <Button btnText={'About'} btnVariant={'default'} btnLink={'/About'} />
            </Link> 
            <Link href='/gallery'>
            <Button btnText={'Gallery'} btnVariant={'default'}/>
            </Link>
            <Link href='/'>
            <Logo />
            </Link>
            <Link href='/myPc'>
            <Button btnText={'Specs'} btnVariant={'default'}/>
            </Link>
            <Button btnText={'Contact'} btnVariant={'default'}/>
        </div>

        
           
        

    </div>
  
  )
}

export default NavBar