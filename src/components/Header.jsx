import React, { useContext } from 'react'
import logoLight from '../assets/NR-logo-light.png'
import logoDark from '../assets/NR-logo-dark.png'
import { ThemeContext } from '../themeContext'
import ToggleMode from './ToggleMode'

function Header() {
  const {darkMode} = useContext(ThemeContext)
  
  const headerStyle={
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    width: "100%",
    minHeight: "40px",
    maxHeight: "75px"
  }

  return (
    <header style={headerStyle}>
      <div style={{height:"100%"}}>
        <img src={darkMode ? `${logoDark}`: `${logoLight}`}
          style={{height:"100%"}}
        />
      </div>
      <div>
        <ToggleMode />
      </div>
    </header>
  )
}

export default Header