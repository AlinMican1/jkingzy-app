import Image from 'next/image'
import React from 'react'
import './logo.css'
import logo from '../../../../public/joshLogo.jpg'

const Logo = () => {
  return (
    
    <>
   
    <div className="logo-container">
      
    <Image  className='logo-container' src={logo} alt="Logo"/>
    </div>
    </>
  )
}

export default Logo