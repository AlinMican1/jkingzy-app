import React from 'react'
import { planeImages } from '@/lib/imageData'
import ImageSlider from '@/components/animations/imageSlider'
import '../../styles/globals.css'
const Gallery = () => {
  return (
    <div className='gallery-page'>
      <div className='auto-display-photo'>
        <ImageSlider images={planeImages}/>
      </div>
      

    </div>
  )
}

export default Gallery