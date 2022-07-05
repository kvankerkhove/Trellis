import React, { useState, useEffect } from 'react'
import SeedTable from './SeedTable'
import HarvestTable from './HarvestTable'
import YieldTable from './YieldTable'


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
      <HarvestTable />
      <YieldTable />
    </div>
  )
}

export default GardenData