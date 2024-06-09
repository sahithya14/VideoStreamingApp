
import ButtonList from './buttonList.js'
import VideoContainer from './video/videoContainer.js'
import { Outlet } from 'react-router-dom'
import '../styles/common.css'


const MainContainer = () => {
    return <div className = "flex flex-column-direction">
        <ButtonList />
        <Outlet/>{/* It can be replace by <VideoContainer/> or Watch Component based on path configured in app.js*/}
       
    </div>
}

export default MainContainer