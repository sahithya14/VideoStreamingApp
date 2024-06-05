import SidebarComponent from "./sidebarComponent"
import MainContainer from "./mainContainer"
import "../styles/common.css"
const BodyComponent = () => {
    return <div className = "flex flex-row-direction">
        <SidebarComponent />
        <MainContainer/>
    </div>
}

export default BodyComponent