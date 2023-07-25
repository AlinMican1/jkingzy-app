'use client'
import React from 'react'
import plane1 from '../../../assets/plane1.jpg'
import Image from 'next/image'
import './photoGallery.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'


const PhotoGallery = () => {
    useEffect(() => {
        let lightBox = document.getElementById('lightbox');

        if (!lightBox) {
          lightBox = document.createElement('div');
          lightBox.id = 'lightbox';
          document.body.appendChild(lightBox);
        }
        
        
        lightBox.id = 'lightbox'
        document.body.appendChild(lightBox)
        
        const images = document.querySelectorAll('.photo-gallery-image')
        images.forEach(image =>{
            image.addEventListener('click', e=> {
                lightBox.classList.add('active')
                const img = document.createElement('img')
                img.src = image.src
                while(lightBox.firstChild){
                    lightBox.removeChild(lightBox.firstChild)
                }
                lightBox.appendChild(img)
            })
        })

        lightBox.addEventListener('click', e =>{
            if(e.target !== e.currentTarget) return;
            lightBox.classList.remove('active')
        })
    });
   
    return (
        <>
        <div className='gallery-wrapper'>
            <div className='gallery-item'>
                
                <Image className='photo-gallery-image' src={plane1} alt=''/>
                 
            </div>
            <div className='gallery-item'>
              
                <Image className='photo-gallery-image' src={plane1} alt=''/>
               
            </div>
            <div className='gallery-item'>
              
                <Image className='photo-gallery-image' src={plane1} alt=''/>
                
            </div>
            <div className='gallery-item'>
              
                <Image className='photo-gallery-image' src={plane1} alt=''/>
              
            </div>
            <div className='gallery-item'>
            
                <Image className='photo-gallery-image' src={plane1} alt=''/>
                
            </div>
            <div className='gallery-item'>
            
                <Image className='photo-gallery-image' src={plane1} alt=''/>
                
            </div>
        </div>
        <div className='photo-gallery-title'>
         <p>For More<span className='span-title'> Photos.</span> <br/> 
            <Link href={"https://www.instagram.com/thekingzace/"}>
            <FontAwesomeIcon className='socials-icon-instagram' icon={faInstagram}>
        
            </FontAwesomeIcon>
            </Link>
            </p>
         </div>
         </>
       
  )
}

export default PhotoGallery