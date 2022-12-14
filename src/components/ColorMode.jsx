import React from 'react'
import SpanColor from './SpanColor'

function ColorMode({mode}) {

  return (
    <>
      <p>{mode}</p>
      <p>{`${mode.toLowerCase()}` === "hexadecimal" ? "# " : "Rgb"}
      <SpanColor text=" XX" color="#f00" />
      <SpanColor text=" XX" color="#0f0" />
      <SpanColor text=" XX" color="#00f" />
      </p>
    </>
  )
}

export default ColorMode