'use client'
import React from 'react'
import plane1 from '../../../assets/plane1.jpg'
import planePhoto1 from '../../../assets/planePhoto1.jpg'
import planePhoto2 from '../../../assets/planePhoto2.jpg'
import planePhoto3 from '../../../assets/planePhoto3.jpg'
import planePhoto4 from '../../../assets/planePhoto4.jpg'
import planePhoto5 from '../../../assets/planePhoto5.jpg'
import planePhoto6 from '../../../assets/planePhoto6.png'
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
                
                <Image className='photo-gallery-image' src={planePhoto1} alt=''/>
                 
            </div>
            <div className='gallery-item'>
              
                <Image className='photo-gallery-image' src={planePhoto2} alt=''/>
               
            </div>
            <div className='gallery-item'>
              
                <Image className='photo-gallery-image' src={planePhoto3} alt=''/>
                
            </div>
            <div className='gallery-item'>
              
                <Image className='photo-gallery-image' src={planePhoto4} alt=''/>
              
            </div>
            <div className='gallery-item'>
            
                <Image className='photo-gallery-image' src={planePhoto5} alt=''/>
                
            </div>
            <div className='gallery-item'>
            
                <Image className='photo-gallery-image' src={planePhoto6} alt=''/>
                
            </div>
        </div>
        <div className='photo-gallery-title'>
         <p>For More<span className='span-title'> Photos.</span> <br/> 
            <Link href={"https://www.instagram.com/thekingzace/"}>
            <FontAwesomeIcon className='socials-icon-insta' icon={faInstagram}>
        
            </FontAwesomeIcon>
            </Link>
            </p>
         </div>
         </>
       
  )
}

export default PhotoGallery