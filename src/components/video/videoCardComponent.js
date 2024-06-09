import "../../styles/card.css"

const VideoCard = ({videoInfo}) => {
    const {snippet, statistics } = videoInfo
    console.log(videoInfo)
    return <div className = "video-card-cont">
       <img alt = "thumbnail image" src={snippet?.thumbnails.medium.url}/>
       <ul>
        <li><strong>{snippet?.localized.title}</strong></li>
        <li>{snippet?.channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
       </ul>
    </div>
}

export default VideoCard