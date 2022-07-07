import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import GardenGrid from './GardenGrid'
import './MyGardenItem.css'

function MyGardenItem({garden, setCurrentGarden, handleDelete}) {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const {id, name, rows, columns, garden_squares} = garden

  const history = useHistory()
  useEffect (() => {
    if(columns <= 5 && rows <= 5){
      setHeight('52px')
      setWidth('52px')
    } else if (columns <= 7 && rows <= 7){
      setHeight('35px') 
      setWidth('35px')
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

  const handleDeleteGarden = (e) => {
    fetch(`/gardens/${garden.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(data => handleDelete(data))
  }

  return (
    <div className="tile">
      <div className="tile-card">
        <div id="btns">
          <button className="button" onClick={handleEditClick}>Edit</button>
          <button className="delete-btn" onClick={handleDeleteGarden}>Delete</button>
        </div>
        <GardenGrid className="grid" currentGarden={garden} height={height} width={width}/>
        <small id="name">{name}</small>
      </div>
    </div>
  )
}

export default MyGardenItem