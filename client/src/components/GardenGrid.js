import React, { useState, useEffect } from 'react'
import GardenTile from './GardenTile'
import './GardenGrid.css'

function GardenGrid({selectedCrop, currentGarden}) {
  const [rows, setRows] = useState(8)
  const [columns, setColumns] = useState(8)
  const [currentGardenSquares, setCurrentGardenSquares] = useState([])

  console.log(currentGarden.id)
  const numberOfTiles = currentGardenSquares.length
  console.log(currentGardenSquares)


  useEffect(() => {
    setRows(currentGarden.rows)
    setColumns(currentGarden.columns)
  }, [currentGarden])

  useEffect(() => {
    fetch(`/all_squares/${currentGarden.id}`)
    .then(r => r.json())
    .then(garden_squares => setCurrentGardenSquares(garden_squares))
  }, [currentGarden])

  

  const handleGardenSquare = (squareId, crop) => {
    console.log(`square_id: ${squareId}`)
    console.log(`crop id: ${crop.id}`)
    console.log(`garden id: ${currentGarden.id}`)

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
    .then(data => console.log(data))
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
      return <GardenTile key={i} id={i + 1} selectedCrop={selectedCrop} handleGardenSquare={handleGardenSquare} square={square}/>
  })

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  }

  // console.log(rows)
  // console.log(columns)
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