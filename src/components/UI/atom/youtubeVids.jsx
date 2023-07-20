'use client'
import { useEffect, useState } from "react"
import './youtubeVids.css'




const MaxResult = 5
var fetchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=${MaxResult}&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`

export const YoutubeVids = () =>{
    const [allVideos, setAllVideos] = useState([])
    useEffect(()=>{
        fetch(fetchURL).then((response)=> response.json()).then((resJson)=>{
            const result = resJson.items.map(doc=>({
                ...doc,
                VideoLink: "https://www/youtube.com/embed/"+doc.id.videoId
            }));
            setAllVideos(result)
        }) .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])
    console.log(allVideos)
    return (

        <div className="container">
            
        {/* Render the first video separately */}
        {allVideos.length > 0 && (
            <div className="container-video">
            <div className="card">
                <div className="imgBx">
                <img src={allVideos[0].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                </div>
                <div className="content">
                    <h1>{allVideos[0].snippet.title}</h1>
                    <p>asdfgasgadsgadgasdgasgasasg</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                <img src={allVideos[1].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                </div>
                <div className="content">
                    <h1>{allVideos[1].snippet.title}</h1>
                    <p>asdfgasgadsgadgasdgasgasasg</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                <img src={allVideos[2].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                </div>
                <div className="content">
                    <h1>{allVideos[2].snippet.title}</h1>
                    <p>asdfgasgadsgadgasdgasgasasg</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                <img src={allVideos[3].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                </div>
                <div className="content">
                    <h1>{allVideos[3].snippet.title}</h1>
                    <p>asdfgasgadsgadgasdgasgasasg</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                <img src={allVideos[4].snippet.thumbnails.high.url} alt={allVideos[0].snippet.title} />
                </div>
                <div className="content">
                    <h1>{allVideos[4].snippet.title}</h1>
                    <p>asdfgasgadsgadgasdgasgasasg</p>
                </div>
            </div> 

            </div>
            
        )}
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

