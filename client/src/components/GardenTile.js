import React from 'react'
import './GardenTile.css'

function GardenTile({id, selectedCrop, handleGardenSquare, square, height, width}) {
  const handleClick = (e) => {
    e.target.src = selectedCrop.image
    // e.target.style.opacity = 1
    handleGardenSquare(square.id, selectedCrop)
    // console.log(square)
    // console.log(id)
  }




  const handleDoubleClick = (e) => {
    alert(e.target.src)
  }
  return (
      <div onClick={handleClick} onDoubleClick={handleDoubleClick} class='garden-tile' id={id} style={{height:{height}, width:{width}}} >
        <img id="garden-tile-image" src={square.crop.image} height={height}  width={width}/>
      </div>
  )
}

export default GardenTile

// height={height} width={width}
