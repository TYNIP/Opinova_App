import {React} from 'react';
import './topBar.css';
import ROUTES from '../../app/routes';
import { Link } from 'react-router-dom';
import SearchBar from '../../features/searchBar/SearchBar';

const TopBar = ({ toggleSidebar }) => {
  return (
    <div id="topbar-wrapper">
      <div id="topbar" className="container d-flex align-items-center justify-content-between h-100">
        <div>
          <i
            id="sidebar-trigger"
            className="fas fa fa-bars fa-fw"
            onClick={toggleSidebar}
          ></i>
        </div>
        {/* SEARCH */}
        <SearchBar />
        <span id="breadcrumb">
          <Link to='/ '><span>Home</span></Link>
        </span>
      </div>
    </div>
  );
};

export default TopBar;