'use client'
import React from 'react'
import Parallax from '../animations/parallax'
import background from '../../assets/pcBackground.jpg'
import transparent from '../../assets/transparent.png'
import '../../../styles/globals.css'
import SpecBox from '../UI/atom/specBox'
import SpecVideo from '../UI/atom/specVideo'
import Image from 'next/image'
import { motion } from 'framer-motion'
import '../UI/molecule/contentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import PheripheralPic from '../../assets/peripheralPic.jpg'
import DesktopPc from '../../assets/DesktopPc.jpg'
import FilterPic from  '../../assets/filterPic.jpg'
const SpecsPage = () => {
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
  ,'Headeset: Logitech G PRO X Gaming-Headset' , 'Thrustmaster: TCA Yoke Boeing Edition / TCA Throttle Quadrant Boeing Edition' ]

  const NvidiaSettings = [ 'Auto Depth of field: Speed (37%) , Intensity (50%) , Invert Z/X Axis Depth? Yes (Z): No (X)',
  'Colour: Tint Colour (34%) ,Tint Intensity (11%) , Temperature (0.5) ,Vibrance (12.6) ',
  'Details: Sharpen & Clarity (0% & 45%), HDR Toning (33%), Bloom (7%)' , 
  'Brightness/Contrast: Exposure (-5%) , Contrast (15%), Highlights (31%) , Shadows (43%) , Gamma (0%)' 
 ]
  
  return ( 
    
    <div className='specs-page'>
      <Parallax backgroundSrc={background} foreground1Src={transparent} foreground2Src={transparent} titleTxt={'Hardware'}/>
      <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimatePicture} id="specs-pc-section">
        <SpecBox title="Desktop ✈" items={DesktopSpecs} />
        <Image className='spec-image' src={DesktopPc} alt='' />
      </motion.div>
      <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimatePicture} id="specs-pc-section2">
        <Image className='spec-image2' src={PheripheralPic} alt='' />
        <SpecBox title="Peripherals ✈" items={PeripheralsSpecs} />
      </motion.div>
      <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimatePicture} id="specs-pc-section">
        <SpecBox title="Sim Filters ✈" items={NvidiaSettings} />
        <Image className='spec-image' src={FilterPic} alt='' />
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
export default SpecsPage;