import React from 'react'
import { useHistory } from 'react-router-dom'
import GardenGrid from './GardenGrid'

function MyGardenItem({garden, setCurrentGarden}) {
  const {id, name, rows, columns, garden_squares} = garden

  const history = useHistory()
  let height = '50px'
  let width = '50px'

  const handleEditClick = (e) => {
    console.log(garden)
    fetch("/assign_garden", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(garden),
    })
    .then(r => r.json())
    .then(data => {
      setCurrentGarden(data)
      history.push('/create_garden')
    })

    
  }
  return (
    <div>
      <h1>{name}</h1>
      <GardenGrid currentGarden={garden} height={height} width={width}/>
      <button onClick={handleEditClick}>view and edit</button>
    </div>
  )
}

export default MyGardenItem