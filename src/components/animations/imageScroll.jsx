'use client'
import React from 'react'
import './imageScroll.css';
import Image from 'next/image';
import {  useRef, useEffect } from 'react';

export const ImageScroll = ({imagesSwipe, scrollId}) => {
    const trackRef = useRef(null);

  useEffect(() => {
    //const track = document.getElementById("images-track");
    const track = trackRef.current;
    const handleMouseDown = (e) => {
      track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
    };

    const handleMouseMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - (e.clientX || e.touches[0].clientX);
      const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * - 80,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -80);

        track.dataset.percentage = nextPercentage;
        track.style.transform = `translate(${nextPercentage}%, -50%)`;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
          }, { duration: 1200, fill: "forwards" });

        for(const image of track.getElementsByClassName("image-inside-track")){
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
              }, { duration: 1200, fill: "forwards" });
        }
    };

    const handleMouseUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    if (track) {
        track.addEventListener('mousedown', handleMouseDown);
        track.addEventListener('touchstart', handleMouseDown);
        track.addEventListener('mouseup', handleMouseUp);
        track.addEventListener('touchend', handleMouseUp);
        track.addEventListener('mousemove', handleMouseMove);
        track.addEventListener('touchmove', handleMouseMove);
      }
  
      return () => {
        if (track) {
          track.removeEventListener('mousedown', handleMouseDown);
          track.removeEventListener('touchstart', handleMouseDown);
          track.removeEventListener('mouseup', handleMouseUp);
          track.removeEventListener('touchend', handleMouseUp);
          track.removeEventListener('mousemove', handleMouseMove);
          track.removeEventListener('touchmove', handleMouseMove);
        }
      };
    }, []);
    return (
    <div className='images-body'>
        {imagesSwipe && (
        <div id={scrollId} ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0" >
            <p className='start-scroll'>Swipe. </p>
            {imagesSwipe.map((image, index) => (
            <Image key={index} className='image-inside-track' src={image.image} alt='' draggable='false' />
            ))}
            <p className='ending-scroll'>End.</p>
        </div>
        )}
    </div>
  )
};

