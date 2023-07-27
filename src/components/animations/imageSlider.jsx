'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './imageSlider.css'
import Plx from 'react-plx'
const ImageSlider = ({images}) => {
    const[autoPlay,setAutoPlay] = useState(true);
    let timeOut = null
    useEffect(() =>{
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        },5000)
    })
    const[current,setCurrent] = useState(0)
    const slideRight = () =>{
        setCurrent(current === images.length -1 ? 0 : current + 1)
        
    }
    const slideLeft = () =>{
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
    return (
        /* SET AUTOPLAY ON MOUSE ENTER put in the first div tag*/
        /*onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true);}}*/
    <div className='carousel'>
        <div className='carousel-wrapper'>
            {images.map((image, index) =>{
                return(
                    <div key={index} className={index== current ? "carousel-card carousel-card-active" : "carousel-card"}>
                        <Image className="card-image" src={image.image} alt="" />
                        
                        
                        <div className='card-overlay'>
                            <h2 className='card-title'>
                                {image.title} <span className="card-miniTitle">{image.miniTitle}</span>
                            </h2>
                            <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:0,
                    endValue:10,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
                            <div className='card-description-box'>
                            <p className='card-description'>
                                {image.description}
                            </p>
                            </div>
                            </Plx>
                        </div>
                       
                    </div>
                )
            })}
             
             <div className='carousel-pagination'>
                {images.map((_, index) =>{
                    return(
                    <div 
                    key={index} 
                    className =
                    {index == current 
                        ? "pagination-dot pagination-dot-active" 
                        : "pagination-dot"
                    }
                    onClick={ () => setCurrent(index)}>
                    

                    </div>
                    );
                })}
            </div> 
            
        </div>
        
        
    </div>
  )
}

export default ImageSlider