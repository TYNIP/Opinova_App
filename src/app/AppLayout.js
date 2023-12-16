import {React, useState} from 'react';
import {Outlet, NavLink} from 'react-router-dom';
import TopBar from '../components/topBar/TopBar';
import SideBar from '../components/sideBar/SideBar';

export default function AppLayout() {
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisibility(!isSidebarVisible);
      };
    return (
        <>
        <div className="content-container">
        {/* SIDEBAR */}
        <SideBar isVisible={isSidebarVisible}/>
        
        {/* MAIN SECTION */}
        <div aria-label="main profile-wrapper" id="main-wrapper" className="d-flex justify-content-center">
            <div id="main" className="container px-xxl-5">
                {/* TOPBAR */}
                <TopBar toggleSidebar={toggleSidebar}/>
                {/* CONTENT */}
                <div id="main_page">
                    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-9 pe-xl-4">
                        <div className="post px-md-2">
                            {/* POSTS */}
                            <section id="posts">
                                <div className="post-content">
                                    {/* OUTLET */}
                                    <Outlet/>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/* ADVERTICEMENT */}
                    <div id="panel-wrapper" className="col-xl-3 ps-2 text-muted">
                        <div id="panel-wrapper-content">
                            {/* ADVERTICEMENT */}

                        </div>
                    </div>
        
                </div>
            </div>
        </div>
        </div>
        </>
    );
};