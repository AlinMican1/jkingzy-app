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
console.log(fetchURL)
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
           <div className="card-container">
                    {allVideos.length > 0 && (
                    <Link className="custom-link" href={allVideos[0].VideoLink}>
                        <Reveal>
                        <div className="card">  
                            
                            <img className="thumbnail" src={allVideos[0].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                            
                            <div className="content">
                                <h2 className="title">{allVideos[0].snippet.title}</h2>
                            </div>
                           
                        </div>
                        </Reveal>  
                    </Link>
            )}  
                {allVideos.slice(1).map((item)=>{
                return(
                    <Link className="custom-link" href={item.VideoLink} key={item.id.videoId}>
                        <Reveal>
                            <div className="card-all">
                                <img className="thumbnail-all" src={item.snippet.thumbnails.high.url}/>
                                <div className="content">
                                    <h2 className="title-all">{item.snippet.title.substring(0, 40)}...</h2>
                                </div>
                            </div>
                        </Reveal>
                    </Link>   
                )
            })}
            </div>
        
            
        
            
            
       
       
        )
        {/* <div className="container">
            <div className="container-video">
        {allVideos.map((item) => {
                 return (
            <div className="card" key={item.id.videoId}>
                <div className="imgBx">
                <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                </div>
                <div className="content">
                    <p></p>
                </div>
          </div>
        );
      })}
     
      </div>
    </div>
    ) */}
          {/* {allVideos.length > 0 && (
                
                  <img className="image-grid-col-2 image-grid-row-2" src={allVideos[0].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                
            
          )}
      
       
         
          {allVideos.slice(1).map((item) => (
            <div key={item.id.videoId} >
                    
                        <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                     
                    
                </div>
           
            
          ))}
          
        </div>
      ); */}
        {/* <div >
            {allVideos.map((item)=>{
                return(
                    <div className="container-videos">
                        <div className="container-recent-video">
                        <div className="container-recent-video-thumbnail">
                            <img src={item.snippet.thumbnail}/>
                        </div>
                        <div className="container-recent-video-text"></div>
                            <h1>{item.snippet.title}</h1>
                            
                        </div>
                        
                    </div>
                )
            })}
            
        </div> */}
    
}

export default YoutubeVids

