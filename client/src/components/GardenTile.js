import React from 'react'
import './GardenTile.css'

function GardenTile({id, selectedCrop, handleGardenSquare, square, height, width}) {
  console.log(selectedCrop)


  const handleClick = (e) => {
    e.target.src = require(`../images/${selectedCrop.image}`)
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
        <img id="garden-tile-image" src={ require(`../images/${square.crop.image}`)} alt={square.crop.name} height={height}  width={width}/>
      </div>
  )
}

export default GardenTile

// height={height} width={width}

// src={ require(`../images/${crop.image}`)}
