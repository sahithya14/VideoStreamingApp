import MenuItems from "./menuItems"
import '../styles/sidebar.css'
import { useSelector } from 'react-redux'

const SidebarComponent = () => {
    const isSidebarVisisble = useSelector(state=>state.sidebar.isSidebarVisisble)
    return <div className={`sidebar-container ${isSidebarVisisble? 'open':'close'}`}>
        <MenuItems />
    </div>
}

export default SidebarComponent