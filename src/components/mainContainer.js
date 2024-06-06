import {GET_YOUTUBE_VIDEOS_API} from '../constants/apiConstants.js'
import videoServices from '../services/videoServices.js'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './videoCardComponent.js'
import '../styles/card.css'

const MainContainer = ()=>{

    const [videosList, setVideosList] = useState([])

    useEffect(()=>{
        videoServices.getVideoList(GET_YOUTUBE_VIDEOS_API).then((data)=>{
            console.log(data)
            setVideosList(data?.items)
        }).catch(console.error())
      
    },[])

    if(videosList.length===0) return null
    return <div className={`videos-container`}>
        {videosList.map((videoInfo)=>{
             return<VideoCard videoInfo ={videoInfo}/>
        })}  
        </div>
}

export default MainContainer