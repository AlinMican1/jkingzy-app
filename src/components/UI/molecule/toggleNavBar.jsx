'use client'
import React from 'react'
import './toggleNavBar.css'
import Button from '../atom/button'
import Link from 'next/link'
import '../../../../styles/globals.css'
import './navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faIdBadge, faBriefcase, faImage, faHardDrive } from '@fortawesome/free-solid-svg-icons';

const ToggleNavBar = ({activeButton, handleButtonClick }) => {
  return (
    <div className='toggleNavBar-container'>
      <div className='toggleNavBar-contents'>
        <Link href="/" className='active-toggle'> 
          <Button
            btnText2={'Home'}
            btnIcon2={<FontAwesomeIcon icon={faHouse} />}
            btnVariant={activeButton === 'Home' ? 'default-toggle active-toggle' : 'default-toggle'}
            onClick={() => handleButtonClick('Home')}
          />
        </Link>
        <Link href="/about" className='active-toggle'> 
          <Button
            btnText2={'About'}
            btnIcon2={<FontAwesomeIcon icon={faIdBadge} />}
            btnVariant={activeButton === 'About' ? 'default-toggle active-toggle' : 'default-toggle'}
            onClick={() => handleButtonClick('About')}
          />
        </Link>
        <Link href="/work" className='active-toggle'> 
          <Button
            btnText2={'Work'}
            btnIcon2={<FontAwesomeIcon icon={faBriefcase} />}
            btnVariant={activeButton === 'Work' ? 'default-toggle active-toggle' : 'default-toggle'}
            onClick={() => handleButtonClick('Work')}
          />
        </Link>
        <Link href="/gallery" className='active-toggle'> 
          <Button
            btnText2={'Gallery'}
            btnIcon2={<FontAwesomeIcon icon={faImage} />}
            btnVariant={activeButton === 'Gallery' ? 'default-toggle active-toggle' : 'default-toggle'}
            onClick={() => handleButtonClick('Gallery')}
          />
        </Link>
        <Link href="/specs" className='active-toggle'> 
          <Button
            btnText2={'Hardware'}
            btnIcon2={<FontAwesomeIcon icon={faHardDrive} />}
            btnVariant={activeButton === 'Hardware' ? 'default-toggle active-toggle' : 'default-toggle'}
            onClick={() => handleButtonClick('Hardware')}
          />
        </Link>
       
      </div>
    </div>
  );
};
export default ToggleNavBar

