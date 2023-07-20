import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/UI/atom/button'
import VideoBg from '@/components/UI/organism/videoBg'
import NavBar from '@/components/UI/molecule/navBar'
import ContentBox from '@/components/UI/molecule/contentBox'
import '../styles/globals.css'
import YoutubeVids from '@/components/UI/atom/youtubeVids'

export default function Home() {
  return (
    <div >
        <YoutubeVids/>
        
    </div>
    
  )
}
