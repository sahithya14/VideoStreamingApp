import { useSearchParams } from "react-router-dom"
import '../styles/card.css'

const WatchComponent = () => {
    let [searchParams] = useSearchParams();
    const videoId = searchParams.get('id')


    return <div className={`videos-container`}>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId}
         title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
}

export default WatchComponent