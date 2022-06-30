import React from 'react'
import './GardenTile.css'

function GardenTile({id}) {
  const handleClick = (e) => {
    console.log(e.target.id)
  }
  return (
    <div onClick={handleClick} class='garden-tile' id={id}>
      
    </div>
  )
}

export default GardenTile