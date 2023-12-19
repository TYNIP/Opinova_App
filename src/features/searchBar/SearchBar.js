import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from './searchBarSlice';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector(selectSearchTerm);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    navigate('posts');
  };

  return (
    <span id="search-wrapper" className="align-items-center">
      <i className="fas fa fa-search fa-fw"></i>
      <input
        className="form-control"
        id="search-input"
        type="search"
        aria-label="search"
        autoComplete="on"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </span>
  );
};

export default SearchBar;