import { useLayoutEffect, useState } from "react"

export function useWindowSize(){
    const[size,setSize] = useState([0,0])
    //Layout effect is used to only return once the size of the screen has been changed, and not keep returning. 
    useLayoutEffect(() =>{
        function updateSize(){
            setSize([window.innerWidth,window.innerHeight])
        }
        window.addEventListener('resize',updateSize)
        return ()=> window.removeEventListener('resize', updateSize);
    },[])
     
    return size;
}