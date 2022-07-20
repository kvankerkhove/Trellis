import React, { useState, useEffect } from 'react'
import SeedTable from './SeedTable'
import Schedule from './Schedule'
import { BiRefresh } from 'react-icons/bi'
import './GardenData.css'


function GardenData({currentGarden}) {
  const [currentGardenSquares, setCurrentGardenSquares] = useState([])
  const [refresh, setRefresh] = useState(true)

  
  useEffect(() => {
    fetch(`/api/garden_data/${currentGarden.id}`)
    .then(r => r.json())
    .then(data => setCurrentGardenSquares(data))
  },[currentGarden, refresh])
  return (
    <div id="garden-data">
      <div id="refresh">
        <BiRefresh style={{fontSize: '2.5rem'}} onClick={() => setRefresh((refresh => !refresh))}></BiRefresh>
      </div>
      <SeedTable currentGardenSquares={currentGardenSquares}/>
      <Schedule currentGarden={currentGarden} refresh={refresh} />
    </div>
  )
}

export default GardenData