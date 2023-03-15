import React, { useState, useEffect } from 'react'
import GardenTile from './GardenTile'
import './GardenGrid.css'
import moment from 'moment'


function GardenGrid({selectedCrop, currentGarden, height, width}) {
  const [rows, setRows] = useState(8)
  const [columns, setColumns] = useState(8)
  const [currentGardenSquares, setCurrentGardenSquares] = useState([])

  useEffect(() => {
    setRows(currentGarden.rows)
    setColumns(currentGarden.columns)
  }, [currentGarden])

  useEffect(() => {
    fetch(`/api/all_squares/${currentGarden.id}`)
    .then(r => r.json())
    .then(garden_squares => setCurrentGardenSquares(garden_squares))
  }, [rows])

  //this function handles a garden square change on the backend such as adding a crop to that square
  const handleGardenSquare = (squareId, crop) => {
    const updateCropObj = {
      crop_id: crop.id,
      start_date: moment().format('YYYY-MM-DD')
    }

    fetch(`/api/garden_squares/${squareId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateCropObj)
    })
    .then(r => r.json())
  }

  const renderTiles = currentGardenSquares.map((square, i) => {
      return <GardenTile key={i} id={i + 1} selectedCrop={selectedCrop} handleGardenSquare={handleGardenSquare} square={square} height={height} width={width}/>
  })

  //each garden grid utilizes a css grid layout
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  }

 
  return (
    <div id='garden-grid-container'>
      <div id='garden-grid' style={gridStyle}>
          {renderTiles}
      </div>
    </div>
  )
}

export default GardenGrid