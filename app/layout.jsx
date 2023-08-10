'use client'
import '../styles/globals.css'
import NavBar from '../src/components/UI/molecule/navBar'
import {useEffect, useRef, Suspense  } from 'react';
import Loading from './loading';
import Footer from '../src/components/UI/atom/footer'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({ children }) {
  useEffect(() => {(
    
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
    )()
  
  }, []);

  return (
    
    <html lang="en">
       
        <body className={poppins.className} >
        
        <NavBar/>
        <div  >
        
        {children}
        
        </div>
        <div>
          <Footer  />
        </div>
      
        </body>
        
        
    </html>
  )
}
