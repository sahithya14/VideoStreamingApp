import { GET_YOUTUBE_VIDEOS_API } from '../constants/apiConstants.js'
import videoServices from '../services/videoServices.js'
import { useEffect, useState } from 'react'
import VideoCard from './videoCardComponent.js'
import ButtonList from './buttonList.js'
import '../styles/card.css'
import '../styles/common.css'

const MainContainer = () => {

    const [videosList, setVideosList] = useState([])

    useEffect(() => {
        videoServices.getVideoList(GET_YOUTUBE_VIDEOS_API).then((data) => {
            console.log(data)
            setVideosList(data?.items)
        }).catch(console.error())

    }, [])

    if (videosList.length === 0) return null


    return <div className = "flex flex-column-direction margin-top-50">
        <ButtonList />
        <div className={`videos-container`}>
            {videosList.map((videoInfo) => {
                return <VideoCard videoInfo={videoInfo} />
            })}
        </div>
    </div>
}

export default MainContainer