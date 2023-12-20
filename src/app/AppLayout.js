import {React, useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {Outlet, useLocation} from 'react-router-dom'
import TopBar from '../components/topBar/TopBar';
import SideBar from '../components/sideBar/SideBar';
import AuxBar from '../components/auxBar/AuxBar';
import { fetchPosts, fetchMostPopularPosts} from '../features/posts/postsSlice';
import { selectThemeState } from '../features/themeSelector/themesSelectorSlice';
import { selectSearchTerm } from '../features/searchBar/searchBarSlice';
import '../assets/posts.css';

export default function AppLayout() {
    /* SIDEBAR VISIBILITY */
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisibility(!isSidebarVisible);
      };
    /* FETCH OF DATA */
    const dispatch = useDispatch();
    const { selectedTheme, selectedSubtheme } = useSelector(selectThemeState); 
    const searchTerm = useSelector(selectSearchTerm);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/home') {
            dispatch(fetchMostPopularPosts()); 
          } else if (location.pathname === '/posts'){
            dispatch(fetchPosts({ theme: selectedTheme, subtheme: selectedSubtheme, searchTerm }));
          }
      }, [dispatch, location.pathname, selectedTheme, selectedSubtheme, searchTerm]);

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
                                    <Outlet/>
                                </div>
                            </section>
                        </div>
                    </div>
                    {/* Right side bar/auxiliary */}
                    <div id="panel-wrapper" className="col-xl-3 ps-2 text-muted">
                        <div id="panel-wrapper-content">
                            {/* Right side bar/auxiliary */}
                            <AuxBar/>
                        </div>
                    </div>
        
                </div>
            </div>
        </div>
        </div>
        </>
    );
};