export async function GetYoutubeVids() {
    const MaxResult = 8
    var fetchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&maxResults=${MaxResult}&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`
    const response = await fetch(fetchURL)
    const data = await response.json()
    return{
        props:{
            data
        }
    }
}