import VideoCard from "./videoCardComponent"
import { Link } from 'react-router-dom'
import '../../styles/card.css'
import { GET_YOUTUBE_VIDEOS_API } from '../../constants/apiConstants.js'
import videoServices from '../../services/videoServices.js'
import { useEffect, useState } from 'react'

const VideoContainer = () => {
    const [videosList, setVideosList] = useState([])

    useEffect(() => {
        videoServices.getVideoList(GET_YOUTUBE_VIDEOS_API).then((data) => {
            console.log(data)
            setVideosList(data?.items)
        }).catch(console.error())

    }, [])

    if (videosList.length === 0) return null
    
    return <div className={`videos-container`}>
    {videosList.map((videoInfo) => {
        return <Link to = {'/watch?id='+videoInfo.id} ><VideoCard key = {videoInfo.id} videoInfo={videoInfo} /></Link>
    })}
    </div>
}

export default VideoContainer


