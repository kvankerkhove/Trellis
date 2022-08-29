import React from 'react'
import './GardenTile.css'

function GardenTile({id, selectedCrop, handleGardenSquare, square, height, width}) {


  const handleClick = (e) => {
    e.target.src = require(`../images/${selectedCrop.image}`)
    // e.target.style.opacity = 1
    handleGardenSquare(square.id, selectedCrop)
  }

  const handleRightClick = (e) => {
    console.log(e.target)
    console.log(square)
  }

  return (
      <div onClick={handleClick} onContextMenu={handleRightClick} class='garden-tile' id={id} style={{height:{height}, width:{width}}} >
        <img id="garden-tile-image" src={ require(`../images/${square.crop.image}`)} alt={square.crop.name} height={height}  width={width}/>
      </div>
  )
}

export default GardenTile

// height={height} width={width}

// src={ require(`../images/${crop.image}`)}
