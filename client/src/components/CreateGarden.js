import React, { useState } from 'react'
import Header from './Header'
import GardenGrid from './GardenGrid'
import GardenData from './GardenData'
import './CreateGarden.css'

function CreateGarden({crops, user, currentGarden, setCurrentGarden}) {
  const [selectedCrop, setSelectedCrop] = useState(null)
  const [showCropData, setShowCropData] = useState(false)
  const [fetchingInProgress, setFetchingInProgress] = useState(false)

  // if(!currentGarden) return null
  // let height = '75px'
  // let width = '75px'

  let height = '75vh'
  let width = '75vh'

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
  }
  }

  const handleRefresh = () => {
    fetch("/remove", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // setIsLoggedIn(false)
        // setUser(null);
        // history.push('/login')
        setCurrentGarden(null)
      }
    });
  }



  const handleDataClick = () => {
    setShowCropData((showCropData) => !showCropData)
  }


  return (
    <div id="create-garden-page">
      <div id="create-garden-top-picture">
        <h1 id="saying">create something beautiful</h1>
      </div>
      <Header crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop} user={user}  currentGarden={currentGarden} handleCurrentGarden={handleCurrentGarden}/>
      
      {currentGarden ? <GardenGrid selectedCrop={selectedCrop} currentGarden={currentGarden} height={height} width={width}/> : null } 
      {currentGarden ? <button onClick={handleRefresh}>Create New Garden</button> : null }
      <div id="create-garden-bottom-picture">
        {currentGarden ? <button id="button" onClick={handleDataClick}>{showCropData ? 'hide data' : 'show data'}</button>  : null}
      </div>
      {showCropData ? <GardenData className="garden-data" currentGarden={currentGarden}/> : null}
      <br></br>
      
    </div>
  )
}

export default CreateGarden


// handleCurrentGarden={handleCurrentGarden}