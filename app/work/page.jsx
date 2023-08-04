import React from 'react'
import Parallax from '../../src/components/animations/parallax'
import background from '../../src/assets/backgroundclouds.jpg'
import transparent from '../../src/assets/transparent.png'
import Timeline from '../../src/components/UI/atom/timeline'

import '../../styles/globals.css'
const Work = () => {
  return (
    
    <div className='work-page'>
        <Parallax backgroundSrc={background} foreground1Src={transparent} foreground2Src={transparent} titleTxt={"Work"} />
        <div>
          <Timeline/>
        </div>
    </div>
    
  )
}

export default Work