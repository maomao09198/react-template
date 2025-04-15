import React from 'react';

import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


const ThemeSwitch = () => {

    const toggleTheme = (e) => {
        if(e.target.checked){
            document.querySelector('body').setAttribute('data-theme', 'dark')
        }
        else{
            document.querySelector('body').setAttribute('data-theme', 'light')
        }

        const theme = document.body.getAttribute('data-theme');
        localStorage.setItem('theme', theme);
    };

    return (
      <div>
        <div className="wrapper">
          <label className="toggle text-base-content">
            <input type="checkbox" onChange={toggleTheme}/>
            <CiLight></CiLight>
            <MdDarkMode></MdDarkMode>
          </label>
        </div>
      </div>
    );
};

export default ThemeSwitch;