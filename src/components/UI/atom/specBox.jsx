'use client'
import React from 'react'
import './specBox.css'
import {motion} from 'framer-motion'

const SpecBox = ({title, items}) => {
    const AnimateText ={
        offscreen:{ opacity: 0, scale: 0.5 },
        onscreen:{
            opacity: 1, scale: 1,
            transition: { duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]}
        }
    }
  return (
    <div className="wrapper">
    <fieldset>
      <legend align="center"><span>{title}</span>
      </legend>
      <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateText} className="text">
        <p>
        {items.map((item, index) => (
              <React.Fragment key={index}>
                • <span style={{ color: '#00A8D0' }}>{item.split(':')[0]}</span>: {item.split(':')[1]}
                <br />
              </React.Fragment>
            ))}
        </p>
       
      </motion.div>
    </fieldset>
  </div>
  )
}

export default SpecBox