import SidebarComponent from "./sidebarComponent"
import MainContainer from "./mainContainer"
import "../styles/common.css"
import { useSelector } from 'react-redux'

const BodyComponent = () => {

    const isSidebarVisisble = useSelector(state=>state.sidebar.isSidebarVisisble)
    return <div className = "flex flex-row-direction">
        {isSidebarVisisble? <SidebarComponent />:null}
        <MainContainer/>
    </div>
}

export default BodyComponent