import React from 'react'
import './GardenTile.css'

function GardenTile({id, selectedCrop, handleGardenSquare, square}) {
  const handleClick = (e) => {
    e.target.src = selectedCrop.image
    // e.target.style.opacity = 1
    handleGardenSquare(square.id, selectedCrop)
    // console.log(square)
    // console.log(id)
    console.log(e.target)
  }



  const handleDoubleClick = (e) => {
    alert(e.target.src)
  }
  return (
      <div onClick={handleClick} onDoubleClick={handleDoubleClick} class='garden-tile' id={id}>
        <img src={square.crop.image} height='75px' width='75px'/>
      </div>
  )
}

export default GardenTile
