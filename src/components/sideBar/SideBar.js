import React from "react";
import './sideBar.css';
import { NavLink } from "react-router-dom";
import Logo from '../../assets/opinova_img_NF.png';
import ThemeSelector from "../../features/themeSelector/ThemeSelector";
export default function SideBar({ isVisible }){
    const sidebarClass = `sidebar ${isVisible ? 'show' : ''}`;
    return(
        <>
        <div id="sidebar" className={`d-flex flex-column align-items-center ${sidebarClass}`} >
            {/* TITLE */}
            <div id="topbar-title">
                <div className="d-flex align-items-center">
                    <img src={Logo} alt="OPINOVA LOGO"></img>
                </div>
                <h1>OPINOVA</h1>
            </div>
            {/* OPTIONS */}
            <nav role="presentation">
                <div id='themeNav'>
                <ThemeSelector></ThemeSelector>
                </div>
                    {/* SIDEBAR FOOTER */}
                    <div className="personal">
                        <p>OPINOVA ©2023</p>
                        <p>Developed by: <a href='https://artmoram.com/' target='_blank' rel='noreferrer'>TYNIP</a></p>
                        <p>| App with academic purposes. Not Related to any organisation or person |</p>
                        <p>Featured through <a href='https://www.reddit.com/dev/api/' target='_blank' rel='noreferrer'>Reddit API</a></p>
                    </div>
                </nav>
            </div>
            </>
    );
};