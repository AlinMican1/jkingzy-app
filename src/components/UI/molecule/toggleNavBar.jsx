'use client'
import React , {useState, useEffect} from 'react'
import './toggleNavBar.css'
import Button from '../atom/button'
import Link from 'next/link'
import '../../../../styles/globals.css'
import './navBar.css'
const ToggleNavBar = () => {
   
  return (
    <div className='toggleNavBar-container'>
        <Link href="/" className='active'> 
            <Button btnText={'Home'} btnVariant={'default-toggle'} />
            </Link>
            <Link href="/about" className='active'> 
            <Button btnText={'About'} btnVariant={'default-toggle'} />
            </Link>
            <Link href="/work" className='active'> 
            <Button btnText={'Work'} btnVariant={'default-toggle'} />
            </Link>
            <Link href="/gallery" className='active'>
            <Button btnText={'Gallery'} btnVariant={'default-toggle'} />
            </Link>
            <Link href="/specs" className='active'> 
            <Button btnText={'Hardware'} btnVariant={'default-toggle'} />
            </Link>
    </div>
  )
}

export default ToggleNavBar