'use client'
import '../styles/globals.css'
import NavBar from '@/components/UI/molecule/navBar'

import { useEffect } from 'react';
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
     
          
            <body  >
        <NavBar />
        <div  >
        {children}
        </div>
        
        </body>
        
        
    </html>
  )
}
