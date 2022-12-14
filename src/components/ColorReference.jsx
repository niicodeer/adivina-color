import React from 'react'

function ColorReference({color}) {
  return (
    <div className="color-reference">
      <div style={{backgroundColor:`${color}`}}/>
      <p>{color}</p>
    </div>

  )
}

export default ColorReference