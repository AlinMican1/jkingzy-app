'use client'
import '../../styles/globals.css'
import NavBar from '../../src/components/UI/molecule/navBar'
import Footer from '../../src/components/UI/atom/footer'
export default function RootLayout({ children }) {
  

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
