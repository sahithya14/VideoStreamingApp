// import React from 'react'
import '../styles/header.css'
import youtubeImage from '../images/you-tube-logo.png'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import {toggleSideBar} from '../store/sidebarSlice.js'

const Header = () => {
    const dispatch = useDispatch()
    const onSearchClickHandler= (event)=>{
        console.log("clciked search")
    }

    const onHamburgerClickHandler= (event)=>{
        dispatch(toggleSideBar())
    }

    return <div className="header-container">
        <div>
            <img className="icon hamburger-icon" alt='hamburger icon' 
            src={'https://cdn3.iconfinder.com/data/icons/budicon-chroma-ui/24/hamburger-ui-512.png'}
            onClick={onHamburgerClickHandler}
             />
            <img className="icon youtube-icon" alt='youtube icon' src={youtubeImage} />
        </div>
        <div className='flex flex-row-direction search-container'>
            <input className='search-input' type="text" label="Serach"></input>
            <div>
            <CiSearch className="icon search-icon" alt='youtube icon' onClick={onSearchClickHandler}/>
            </div>
        </div>
        <div className = "profile-container">
            <IoMdNotificationsOutline className="icon notification-icon" alt='notifocation icon' onClick={onSearchClickHandler} />
            <CgProfile className="icon search-icon" alt='youtube icon' onClick={onSearchClickHandler}/>
        </div>
    </div>
}

export default Header