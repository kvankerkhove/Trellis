import React, { useState, useEffect } from 'react'
import GardenTile from './GardenTile'
import './GardenGrid.css'

function GardenGrid({selectedCrop, currentGarden, height, width}) {
  const [rows, setRows] = useState(8)
  const [columns, setColumns] = useState(8)
  const [currentGardenSquares, setCurrentGardenSquares] = useState([])
  


  const numberOfTiles = currentGardenSquares.length



  useEffect(() => {
    setRows(currentGarden.rows)
    setColumns(currentGarden.columns)
  }, [currentGarden])

  useEffect(() => {
    fetch(`/all_squares/${currentGarden.id}`)
    .then(r => r.json())
    .then(garden_squares => setCurrentGardenSquares(garden_squares))
  }, [rows])

  // let containerWidth = (+width.slice(0, -2))*columns
  // let containerHeight = (+height.slice(0, -2))*rows




  

  const handleGardenSquare = (squareId, crop) => {

    const updateCropObj = {
      crop_id: crop.id
    }

    fetch(`/garden_squares/${squareId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateCropObj)
    })
    .then(r => r.json())
    // .then(data => console.log(data))
    // let squareInfo = {
    //   square_number: id,
    //   crop_id: +crop.id,
    //   garden_id: +currentGarden.id
    // }
    // fetch('/garden_squares', {
    //   method: "POST",
    //   headers: {
    //     "Text-Content": "application/json"
    //   },
    //   body: squareInfo
    // })
    // .then(r => r.json())
    // .then(data => console.log(data))
  }




  
  const renderTiles = currentGardenSquares.map((square, i) => {
      return <GardenTile key={i} id={i + 1} selectedCrop={selectedCrop} handleGardenSquare={handleGardenSquare} square={square} height={height} width={width}/>
  })

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  }

 
  return (
    <div>
    <div id='garden-grid-container'>
      <div id='garden-grid' style={gridStyle}>
          {renderTiles}
      </div>
    </div>
    </div>
    
  )
}

export default GardenGrid