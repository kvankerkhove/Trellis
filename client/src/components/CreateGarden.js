import React, { useState } from 'react'
import Header from './Header'
import GardenGrid from './GardenGrid'
import GardenData from './GardenData'

function CreateGarden({crops, user, currentGarden, setCurrentGarden}) {
  const [selectedCrop, setSelectedCrop] = useState(null)
  const [currentGardenSquares, setCurrentGardenSquares] = useState([])

  // if(!currentGarden) return null

  const handleSelectedCrop = (selectedCrop) => {
    setSelectedCrop(selectedCrop)
  }


  const handleCurrentGarden = (newGarden) => {
    setCurrentGarden(newGarden)
    let totalSquares = newGarden.rows * newGarden.columns
    let gardenId = +newGarden.id
    console.log(gardenId)
    for(let i = 1; i <= totalSquares; i++) {
      let squareData = {
        square_number: i,
        garden_id: gardenId,
        crop_id: 1
      }
      fetch(`/all_squares/${gardenId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(squareData)
      })
      .then(r => r.json())
      .then(data => console.log(data))
    }
    console.log('this is working')
  }

  // console.log(currentGarden.garden_squares)


  return (
    <div id="create-garden-page">
      <Header crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop} user={user}  currentGarden={currentGarden} handleCurrentGarden={handleCurrentGarden}/>
      {currentGarden ? <GardenGrid selectedCrop={selectedCrop} currentGarden={currentGarden}/> : null }
      <GardenData/>
    </div>
  )
}

export default CreateGarden

// handleCurrentGarden={handleCurrentGarden}