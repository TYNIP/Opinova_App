import {React, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, selectSubtheme, selectThemeState } from './themesSelectorSlice';
import themes from './themesData';

export default function ThemeSelector (){
    const dispatch = useDispatch();
  const { selectedTheme, selectedSubtheme } = useSelector(selectThemeState);
  const [isSubthemesVisible, setSubthemesVisible] = useState(false);

  const handleThemeClick = (theme) => {
    if (selectedTheme === theme) {
      setSubthemesVisible(false);
    } else {
      setSubthemesVisible(true);
      dispatch(selectTheme(theme));
    }
  };

  const handleSubthemeClick = (subtheme) => {
    dispatch(selectSubtheme(subtheme));
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

      {selectedTheme && selectedSubtheme && (
        <li className="nav-item">
          {/* Render Reddit data based on the selected theme and subtheme */}
          {/* You may want to use React Router to navigate to different routes */}
          <div className="nav-link">
            <p>
              Fetching Reddit data for {selectedTheme} - {selectedSubtheme}
            </p>
          </div>
        </li>
      )}
    </ul>
  );
};