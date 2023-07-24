import React from 'react'
import { planeImages } from '@/lib/imageData'
import ImageSlider from '@/components/animations/imageSlider'
import {ImageScroll} from '@/components/animations/imageScroll'
import '../../styles/globals.css'
import { FlightSimPics, RealLifePics } from '@/lib/imageScrollData'
import PhotoGallery from '@/components/UI/atom/photoGallery'

const Gallery = () => {
  return (
    <div className='gallery-page'>
       <div id='auto-display-photo'>
        <ImageSlider images={planeImages}/> 
      </div>
       <div id='favorite-pics-flightSim'>
        <h1 className='gallery-title'>Flight Sim  <span className='span-title-gallery'> Featured.</span></h1>
        <ImageScroll imagesSwipe={FlightSimPics} scrollId="images-track" />
      </div>
      <div id='favorite-pics-realLife'>
      <h1 className='gallery-title'>Plane Spotting  <span className='span-title-gallery'> Featured.</span></h1>
        <ImageScroll className='test' imagesSwipe={RealLifePics} scrollId="images-track2"/>
      </div> 
      <div id='gallery-display'>
      <h1 className='gallery-title'>Extra<span className='span-title-gallery'> Photos.</span></h1>
        <PhotoGallery />
      </div>
    </div>
  )
}

export default Gallery