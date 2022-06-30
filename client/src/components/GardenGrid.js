import React, { useState } from 'react'
import GardenTile from './GardenTile'
import './GardenGrid.css'

function GardenGrid({selectedCrop}) {
  const [rows, setRows] = useState(5)
  const [columns, setColumns] = useState(5)

  let numberOfTiles = rows * columns
  let width = rows*75
  let height = columns*75
  
  const renderTiles = [...Array(numberOfTiles)].map((e, i) => {
      return <GardenTile key={i} id={i + 1}/>
  })

  const gridStyle = {
    height: height,
    width: width,
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  }

  console.log(rows)
  console.log(columns)
  return (
    <div id='garden-grid-container'>
      <div id='garden-grid' style={gridStyle}>
          {renderTiles}
      </div>
    </div>
    
  )
}

export default GardenGrid