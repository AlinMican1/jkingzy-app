'use client'
import React from 'react'
import Parallax from '../../src/components/animations/parallax'
import background from '../../src/assets/pcBackground.jpg'
import transparent from '../../src/assets/transparent.png'
import '../../styles/globals.css'
import SpecBox from '../../src/components/UI/atom/specBox'
import SpecVideo from '../../src/components/UI/atom/specVideo'
import Image from 'next/image'
import { motion } from 'framer-motion'
import '../../src/components/UI/molecule/contentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default async function Specs () {
  const AnimatePicture ={
    offscreen:{ opacity: 0, scale: 0.5 },
    onscreen:{
        opacity: 1, scale: 1,
        transition: { duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]}
    }
}

  const DesktopSpecs = ['CPU: AMD Ryzen 7 5800X 3.8 GHz 8-Core Processor', 'CPU Cooler: NZXT Kraken X53 RGB 52.44 CFM', 'Motherboard: Asus ROG STRIX B550-A GAMING ATX AM4 '
  ,'RAM: Corsair Vengeance RGB Pro 32 GB (4 x 8 GB) DDR4-3600 CL18','SSD: Samsung 970 Evo Plus 1 TB M.2-2280 PCIe 3.0 X4 NVME',
  'SSD: Western Digital Black SN770','HDD: Seagate BarraCuda 4 TB 3.5" ', 'GPU: MSI VENTUS 3X OC GeForce RTX 4070 12 GB' , 'Case: Corsair 4000D Airflow ATX Mid Tower'
  ,'PSU: Corsair RM850 850 W 80+ Gold Certified Fully Modular ATX' , 'Fans: Corsair LL120 63 CFM 120 mm']
  
  const PeripheralsSpecs = ['Camera: Sony AX53 4K Camcorder', 'Microphone: RODE VideoMIC GO', 'Action Cam: GoPro Hero 9', 'Video Editing Software: DaVinci Resolve 18'
  ,'Monitor: MSD Optix MAG241C', '2nd Monitor: Samsung C24F390FHR', 'Mouse: Razer DeathAdder Essential', 'Pedals:T.Flight Rudder', 'Joystick and Throttle: Thrustmaster T16000M FCS Hotas' 
  ,'Headeset: Logitech G PRO X Gaming-Headset']
  
  return ( 
    
    <div className='specs-page'>
      <Parallax backgroundSrc={background} foreground1Src={transparent} foreground2Src={transparent} titleTxt={'Hardware'}/>
      <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimatePicture} id="specs-pc-section">
        <SpecBox title="Desktop ✈" items={DesktopSpecs} />
        <Image className='spec-image' src={background} alt='' />
      </motion.div>
      <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimatePicture} id="specs-pc-section2">
        <Image className='spec-image2' src={background} alt='' />
        <SpecBox title="Peripherals ✈" items={PeripheralsSpecs} />
      </motion.div>
      <div id='specs-pc-video'>
      <SpecVideo video={'https://www.youtube.com/embed/hiy8iBaOTUU?si=QspMWNP0f72DwmmH'}/>
      </div>
      <div className='video-footer'>
          <h1>Check out my channel</h1>
          <p> <Link className='custom-link' href={"https://www.youtube.com/@TheKingzAce"}>
         
              <FontAwesomeIcon className="socials-icon-youtube"  icon={faYoutube}></FontAwesomeIcon>
         
         </Link></p>
        </div>
    </div>
    
  )
}
