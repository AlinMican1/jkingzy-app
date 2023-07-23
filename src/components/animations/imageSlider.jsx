'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './imageSlider.css'

const ImageSlider = ({images}) => {
    const[autoPlay,setAutoPlay] = useState(true);
    let timeOut = null
    useEffect(() =>{
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        },3500)
    })
    const[current,setCurrent] = useState(0)
    const slideRight = () =>{
        setCurrent(current === images.length -1 ? 0 : current + 1)
        
    }
    const slideLeft = () =>{
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
    return (
    <div className='carousel' onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true);}}>
        <div className='carousel-wrapper'>
            {images.map((image, index) =>{
                return(
                    <div key={index} className={index== current ? "carousel-card carousel-card-active" : "carousel-card"}> 
                        <Image className="card-image" src={image.image} alt="" />
                        <div className='card-overlay'>
                            <h2 className='card-title'>
                                {image.title} <span className="card-miniTitle">{image.miniTitle}</span>
                            </h2>
                            
                            <div className='card-description-box'>
                            <p className='card-description'>
                                {image.description}
                            </p>
                            </div>
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