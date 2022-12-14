import React from 'react'
import ColorReference from './ColorReference'

function ColorGrid() {
  return (
    <div style={{display:"grid", gap:".5em", gridTemplateColumns:"1fr 1fr 1fr", justifyItems:"center"}}>
      <ColorReference color="#000000"/>
      <ColorReference color="#888888"/>
      <ColorReference color="#FFFFFF"/>
      <ColorReference color="#FD91C0"/>
      <ColorReference color="#38A099"/>
      <ColorReference color="#3C5F82"/>
      <ColorReference color="#CB4459"/>
      <ColorReference color="#442E3C"/>
      <ColorReference color="#EFC677"/>
    </div>
  )
}

export default ColorGrid