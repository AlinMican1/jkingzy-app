'use client'
import React, {useEffect,useRef} from 'react'
import {motion , useInView, useAnimation} from "framer-motion";
import PropTypes from 'prop-types';

export const Reveal = ({children, width = "fit-content"}) => {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();


    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView]);

    /*I had width in the style*/
    return (
        <div ref={ref} style={{position:"relative",overflow:"hidden"}}>
            <motion.div 
            variants={{
                hidden: {opacity: 0, y:75},
                visible:{opacity: 1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay:0.25}}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible:{left: "100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5, ease:"easeIn"}}
                style={{
                    position:"absolute",
                    top: 4,
                    bottom:4,
                    left:0,
                    right:0,
                    background: "#0aff9d",
                    zIndex:20,
                }}
                />
        </div>
    )
}

Reveal.propTypes = {
    /*children: PropTypes.element.isRequired,*/
    width: PropTypes.oneOf(['fit-content', '100%']),
};
export default Reveal