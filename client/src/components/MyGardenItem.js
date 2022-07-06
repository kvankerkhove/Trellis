import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import GardenGrid from './GardenGrid'
import './MyGardenItem.css'

function MyGardenItem({garden, setCurrentGarden}) {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const {id, name, rows, columns, garden_squares} = garden

  const history = useHistory()
  useEffect (() => {
    if(columns <= 4 || rows <= 4){
      setHeight('52px')
      setWidth('52px')
    } else if(columns <= 6 || rows <= 6){
      setHeight('30px')
      setWidth('30px')
    } else {
      setHeight('22px')
      setWidth('22px')
    }

  }, [garden])

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
    <div className="tile">
      <div className="tile-card">
        <h1>{name}</h1>
        <GardenGrid className="grid" currentGarden={garden} height={height} width={width}/>
        <button className="button" onClick={handleEditClick}>Edit</button>
      </div>
    </div>
  )
}

export default MyGardenItem