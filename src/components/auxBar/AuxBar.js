import React from 'react';
import './auxBar.css';
import { useSelector } from 'react-redux';
import {selectThemeState } from '../../features/themeSelector/themesSelectorSlice';

export default function AuxBar(){
    const { selectedTheme, selectedSubtheme } = useSelector(selectThemeState);
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    return(
        <div id='auxBar'>
            <div id='hour'>
                {currentHour >= 24 && currentHour < 12 && <p>{currentHour}:{currentMin} Good Morning</p>}
                {currentHour >= 12 && currentHour < 19 && <p>{currentHour}:{currentMin} Good Afternoon</p>}
                {currentHour >= 19 && currentHour < 24 && <p>{currentHour}:{currentMin} Good Night</p>}
                <p> Fetching data of: {selectedTheme} ➤ {selectedSubtheme}</p>
                {selectedTheme && selectedSubtheme && (<p>Theme: <br/> {selectedTheme}  ➤  {selectedSubtheme}</p>)}
            </div>
        </div>
    );
}