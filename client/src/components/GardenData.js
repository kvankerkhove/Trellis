import React, { useState, useEffect } from 'react'
import SeedTable from './SeedTable'
import Schedule from './Schedule'


function GardenData({currentGarden}) {
  const [currentGardenSquares, setCurrentGardenSquares] = useState([])

  
  useEffect(() => {
    fetch(`/garden_data/${currentGarden.id}`)
    .then(r => r.json())
    .then(data => setCurrentGardenSquares(data))
  },[currentGarden])
  return (
    <div>
      <SeedTable currentGardenSquares={currentGardenSquares}/>
      <Schedule currentGarden={currentGarden} />
    </div>
  )
}

export default GardenData