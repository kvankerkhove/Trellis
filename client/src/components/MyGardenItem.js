import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import GardenGrid from './GardenGrid'
import './MyGardenItem.css'
import { TiEdit } from 'react-icons/ti'
import { TiDeleteOutline } from 'react-icons/ti'

function MyGardenItem({garden, setCurrentGarden, handleDelete}) {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const {id, name, rows, columns, garden_squares} = garden

  const history = useHistory()
  useEffect (() => {
    if(columns <= 5 && rows <= 5){
      // setHeight('52px')
      // setWidth('52px')
      setHeight('50vh')
      setWidth('50vh')
    } else if (columns <= 7 && rows <= 7){
      setHeight('35vh') 
      setWidth('35vh')
    } else {
      setHeight('25vh')
      setWidth('25vh')
    }

  }, [garden])


  //When edit button is clicked, sets session to clicked garden's id on backend
  const handleEditClick = (e) => {
    fetch("/api/assign_garden", {
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
    fetch(`/api/gardens/${garden.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(data => handleDelete(data))
  }

  return (
    <div className="tile">
      <div className="tile-card" >
        <div id="btns">
          <TiEdit className="button" onClick={handleEditClick} ></TiEdit>
          <TiDeleteOutline className="delete-btn" onClick={handleDeleteGarden}>Delete</TiDeleteOutline>
        </div>
        <GardenGrid className="grid" currentGarden={garden} height={height} width={width}/>
        <small id="name">{name}</small>
      </div>
    </div>
  )
}

export default MyGardenItem