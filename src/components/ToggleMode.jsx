import React, { useContext, useState } from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { ThemeContext } from '../themeContext';
import './toggleTheme.css'


function ToggleMode() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);

  const handleChange = ()=> {
    setActive1(!active1);
    setActive2(!active2)
    setDarkMode(!darkMode)
  }

  return (
    <div 
      className={darkMode ? "toggle dark-toggle":"toggle light-toggle"}>
      <div 
        className= {active1 ? "circle circle-light" : "circle"}
        onClick={()=>handleChange()}>
        <BsFillSunFill />
      </div>
      <div 
        className={active2 ? "circle circle-dark" : "circle"}
        onClick={()=>handleChange()}>
        <BsFillMoonFill />
      </div>
    </div>
  )
}

export default ToggleMode