import React from 'react'
import './contentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTiktok , faInstagram} from '@fortawesome/free-brands-svg-icons'
import Button from '../atom/button'

const ContentBox = () => {
  return (
    <div className="default-box">
        <h1>TheKingzAce</h1>
        <div className='socials-box'>
        <FontAwesomeIcon className="socials-icon-youtube"  icon={faYoutube}></FontAwesomeIcon>
        <FontAwesomeIcon className="socials-icon-tiktok"   icon={faTiktok}></FontAwesomeIcon>
        <FontAwesomeIcon className='socials-icon-instagram' icon={faInstagram}></FontAwesomeIcon>
       
        </div>
        <div className='socials-box2'>
            <Button btnText={'Discord'} btnVariant={'social-button'}/>
            <Button btnText={'Fiverr'} btnVariant={'social-button'}/>
        </div>
      </div>
  )
}

export default ContentBox