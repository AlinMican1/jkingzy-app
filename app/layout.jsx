import '../styles/globals.css'
import NavBar from '@/components/UI/molecule/navBar'

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body >
        <NavBar />
        <div >
        {children}
        </div>
        </body>
        
    </html>
  )
}
