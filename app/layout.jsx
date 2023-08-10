'use client'
import '../styles/globals.css'
import NavBar from '../src/components/UI/molecule/navBar'
import {useEffect, useRef, Suspense  } from 'react';
import Loading from './loading';
import Footer from '../src/components/UI/atom/footer'



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
       
        <body >
        
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
