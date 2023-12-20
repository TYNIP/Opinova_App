import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, selectSubtheme, selectThemeState } from './themesSelectorSlice';
import { useNavigate } from 'react-router-dom';
import themes from './themesData';
import { clearSearchTerm } from '../searchBar/searchBarSlice'

export default function ThemeSelector (){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedTheme } = useSelector(selectThemeState);
  const [isSubthemesVisible, setSubthemesVisible] = useState(false);

  const handleThemeClick = (theme) => {
    if (selectedTheme === theme) {
      setSubthemesVisible(false);
    } else {
      setSubthemesVisible(true);
      navigate('posts');
      dispatch(selectTheme(theme));
      dispatch(clearSearchTerm());
    }
  };

  const handleSubthemeClick = (subtheme) => {
    navigate('posts');
    dispatch(selectSubtheme(subtheme));
    dispatch(clearSearchTerm());
  };

  return (
    <ul className="nav flex-column flex-grow-1 w-100 ps-0">
      {themes.map((theme) => (
        <li className="nav-item" key={theme.name}>
          <div
            className="nav-link links"
            onClick={() => handleThemeClick(theme.name)}
          >
            <i className={`fa-fw fas ${theme.nameIcon}`} style={{ fontSize: '20px' }}></i>
            <span>{theme.name}</span>
          </div>
          {isSubthemesVisible && selectedTheme === theme.name && (
            <ul>
              {theme.subthemes.map((subtheme) => (
                <li
                  className="nav-item links"
                  key={subtheme}
                  onClick={() => handleSubthemeClick(subtheme)}
                >
                  <div className="nav-link links">
                    <i className={`fa-fw fas ${theme.subthemesIcon}`} style={{ fontSize: '20px' }}></i>
                    <span>{subtheme}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
