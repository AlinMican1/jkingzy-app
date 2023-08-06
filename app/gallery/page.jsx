'use client'
import React from 'react'
import { planeImages } from '../../src/lib/imageData'
import ImageSlider from '../../src/components/animations/imageSlider'
import {ImageScroll} from '../../src/components/animations/imageScroll'
import '../../styles/globals.css'
import { FlightSimPics, RealLifePics } from '../../src/lib/imageScrollData'
import PhotoGallery from '../../src/components/UI/atom/photoGallery'
import Plx from 'react-plx'
export default async function Gallery () {
  return (
    <div className='gallery-page'>
       <div id='auto-display-photo'>
        <ImageSlider images={planeImages}/> 
      </div>
       <div id='favorite-pics-flightSim'>
       <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:10,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
        <h1 className='gallery-title'>Flight Sim 
        <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:12,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            > <span className='span-title-gallery'> Featured.</span> </Plx></h1>
        </Plx>
        <ImageScroll imagesSwipe={FlightSimPics} scrollId="images-track" />
      </div>
      <div id='favorite-pics-realLife'>
      
      
      <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              properties: [
                {
                    startValue:10,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
      <h1 className='gallery-title'>Plane Spotting  <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              properties: [
                {
                    startValue:12,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >  <span className='span-title-gallery'> Featured.</span> </Plx></h1></Plx>
        <ImageScroll className='test' imagesSwipe={RealLifePics} scrollId="images-track2"/>
      </div> 
      <div id='gallery-display'>
      <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              properties: [
                {
                    startValue:12,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
      <h1 className='gallery-title'>Extra <Plx
           parallaxData={[{
            start: "self",
            startOffset: 0,
            duration: "80vh",
            properties: [
              {
                  startValue:12,
                  endValue:0,
                  unit:"vh",
                  property:"translateY"
              }
            ]
          }
        ]}
            ><span className='span-title-gallery'> Photos.</span></Plx></h1> </Plx>
         <PhotoGallery /> 
      </div>  
    </div>
  )
}

