import React from 'react'

function SpanColor({text, color}) {
  return (
    <>
      <span style={{color: `${color}`}}>{text}</span>
    </>
  )
}

export default SpanColor