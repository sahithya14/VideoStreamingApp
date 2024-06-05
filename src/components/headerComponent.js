// import React from 'react'
import '../styles/header.css'
import youtubeImage from '../images/you-tube-logo.png'
import { FaSearch } from 'react-icons/fa'


const Header = () => {
    return <div className="header-container">
        <div>
            <img className="icon hamburger-icon" alt='hamburger icon' src={'https://cdn3.iconfinder.com/data/icons/budicon-chroma-ui/24/hamburger-ui-512.png'} />
            <img className="icon youtube-icon" alt='youtube icon' src={youtubeImage} />
        </div>
        <div>
            <input type="text" label="Serach"></input>
            <FaSearch className="icon search-icon" alt='youtube icon'/>
        </div>
        <div>
            <img className="icon notification-icon" alt='notifocation icon' src={'https://cdn3.iconfinder.com/data/icons/budicon-chroma-ui/24/hamburger-ui-512.png'} />
            <img className="icon profile-icon" alt='profile icon' src={'src/images/you-tube-logo.png'} />
        </div>
    </div>
}

export default Header