import React from 'react'
import './quotes.css'
import Plx from 'react-plx'
import Image from 'next/image'
import test from '../../../../styles/niceBg.jpg'

import { useEffect } from 'react'

const Quotes = () => {
  useEffect(() => {(
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
    )()
  
  }, []);
  return (
    <div className='quotes-wrapper'>
    
        {/* <Image src={test} alt=''/>   */}
        <div data-scroll data-scroll-speed ='-0.08' id='box-one'>
            <p>sd kjsdabf balksdfbsadkl baslkdjfb asdlkfjb sad fkljbkjeb walkjfbsdg askjdbg bsadklbf saldkfbesakl fb- sadlfnsadkjfb sdkfjb 1</p>
        </div>
       
       
        <div data-scroll data-scroll-speed ='-0.06' id='box-two'>
        <p>sd kjsdabf balksdfbsadkl baslkdjfb asdlkfjb sad fkljbkjeb walkjfbsdg askjdbg bsadklbf saldkfbesakl fb- sadlfnsadkjfb sdkfjb 2</p>
        </div>
      
        <div data-scroll data-scroll-speed ='-0.08' id='box-three'>
        <p>sd kjsdabf balksdfbsadkl baslkdjfb asdlkfjb sad fkljbkjeb walkjfbsdg askjdbg bsadklbf saldkfbesakl fb- sadlfnsadkjfb sdkfjb 3</p>
        </div>
     
        </div>
   
  )
}

export default Quotes