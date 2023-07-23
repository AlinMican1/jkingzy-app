import React from 'react'
import './contentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTiktok , faInstagram} from '@fortawesome/free-brands-svg-icons'
import Button from '../atom/button'
import Link from 'next/link'
import '../../../../styles/globals.css'
import Reveal from '@/components/animations/reveal'

const ContentBox = () => {
  return (
    <div className="default-box">
        <h1>TheKingzAce</h1>
        <div className='socials-box'>
        <Link className='custom-link' href={"https://www.youtube.com/@TheKingzAce"}>
        <Reveal>
        <FontAwesomeIcon className="socials-icon-youtube"  icon={faYoutube}></FontAwesomeIcon>
        </Reveal>
        </Link>
        <Link className='custom-link' href={"https://www.tiktok.com/@thekingzace"}>
        <Reveal>
        <FontAwesomeIcon className="socials-icon-tiktok"   icon={faTiktok}></FontAwesomeIcon>
        </Reveal>
        </Link>
        <Link className='custom-link' href={"https://www.instagram.com/thekingzace/"}>
        <Reveal>
        <FontAwesomeIcon className='socials-icon-instagram' icon={faInstagram}></FontAwesomeIcon>
        </Reveal>
        </Link>
        </div>
        <div className='socials-box2'>
            <Link className='custom-link' href={"https://discord.gg/AYPyGEnybN"}>
            <Reveal>
            <Button btnText={'Discord'} btnVariant={'social-button'}/>
            </Reveal>
            </Link >
            <Link className='custom-link' href={"https://www.fiverr.com/thekingzace"}>
            <Reveal>
            <Button btnText={'Fiverr'} btnVariant={'social-button'}/>
            </Reveal>
            </Link>
        </div>
      </div>
  )
}

export default ContentBox