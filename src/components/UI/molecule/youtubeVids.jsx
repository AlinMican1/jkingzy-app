'use client'
import { useEffect, useState } from "react"
import './youtubeVids.css'
import test from '../../../../public/test.jpg'
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import Reveal from "@/components/animations/reveal"


const MaxResult = 5
var fetchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=${MaxResult}&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`

export const YoutubeVids = () =>{
   
    const [allVideos, setAllVideos] = useState([])
    useEffect(()=>{
        
        fetch(fetchURL).then((response)=> response.json()).then((resJson)=>{
            const result = resJson.items.map(doc=>({
                ...doc,
                VideoLink: "https://www.youtube.com/watch?v="+doc.id.videoId
            }));
            setAllVideos(result)
        }) .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])
    
    
    return (
        
        <div className="videoArray"  >
            
          
            <div >
            
                {allVideos.length > 0 && (
                <Link className="custom-link" href={allVideos[0].VideoLink}>
                     
                <div className="vid-wrapper" >
                <img quality={100} className="video-placement" src={allVideos[0].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                
                <div className="video-description" >
                    
                    <p>{allVideos[0].snippet.title}</p>
                </div>
                <div className="video-owner">
                    <p>{allVideos[0].snippet.channelTitle}</p>
                </div>
                </div>
                
                </Link>
                
                )}
               
            </div>
            
            
            <div>
                {allVideos.length > 0 && (
                <Link className="custom-link" href={allVideos[1].VideoLink}>
                <div className="vid-wrapper">
                <img className="video-placement" src={allVideos[1].snippet.thumbnails.high.url} alt={allVideos[1].snippet.title} />
                <div className="video-title-all">
                    <p>{allVideos[1].snippet.title.substring(0, 40)}...</p>
                </div>
                <div className="video-owner-all">
                    <p>{allVideos[1].snippet.channelTitle}</p>
                </div>
                </div>
                </Link>
                )}
            </div>
            
            <div>
                {allVideos.length > 0 && (
                <Link className="custom-link" href={allVideos[2].VideoLink}>
                <div className="vid-wrapper">
                <img className="video-placement" src={allVideos[2].snippet.thumbnails.high.url} alt={allVideos[2].snippet.title} />
                <div className="video-title-all">
                    <p>{allVideos[2].snippet.title.substring(0, 40)}...</p>
                </div>
                <div className="video-owner-all">
                    <p>{allVideos[2].snippet.channelTitle}</p>
                </div>
                </div>
                </Link>
                )}
            </div>
            
            <div>
            {allVideos.length > 0 && (
                <Link className="custom-link" href={allVideos[3].VideoLink}>
                <div className="vid-wrapper">
                <img className="video-placement" src={allVideos[3].snippet.thumbnails.high.url} alt={allVideos[3].snippet.title} />
                <div className="video-title-all">
                    <p>{allVideos[3].snippet.title.substring(0, 40)}...</p>
                </div>
                <div className="video-owner-all">
                    <p>{allVideos[3].snippet.channelTitle}</p>
                </div>
                </div>
                </Link>
                )}
            </div>
            
            <div>
            {allVideos.length > 0 && (
                <Link className="custom-link" href={allVideos[4].VideoLink}>
                <div className="vid-wrapper">
                <img className="video-placement" src={allVideos[4].snippet.thumbnails.high.url} alt={allVideos[4].snippet.title} />
                <div className="video-title-all">
                    <p>{allVideos[4].snippet.title.substring(0, 40)}...</p>
                </div>
                <div className="video-owner-all">
                    <p>{allVideos[4].snippet.channelTitle}</p>
                </div>
                </div>
                </Link>
                )}
                
            </div>
            
            
        </div>
    
        )
        
}

export default YoutubeVids

