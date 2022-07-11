import React, { useState } from 'react'
import Header from './Header'
import GardenGrid from './GardenGrid'
import GardenData from './GardenData'
import './CreateGarden.css'
import moment from 'moment'

function CreateGarden({crops, user, currentGarden, setCurrentGarden}) {
  const [selectedCrop, setSelectedCrop] = useState(null)
  const [showCropData, setShowCropData] = useState(false)
  const [fetchingInProgress, setFetchingInProgress] = useState(false)

  // if(!currentGarden) return null
  // let height = '75px'
  // let width = '75px'
  let todaysDate = moment().format('YYYY-MM-DD')

  let height = '75vh'
  let width = '75vh'

  const handleSelectedCrop = (selectedCrop) => {
    setSelectedCrop(selectedCrop)
  }


  const handleCurrentGarden = (newGarden) => {
    setCurrentGarden(newGarden)
    let totalSquares = newGarden.rows * newGarden.columns
    let gardenId = +newGarden.id
    for(let i = 1; i < totalSquares + 1; i++) {
      let squareData = {
        square_number: i,
        start_date: todaysDate,
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

  //Removes current_garden session and directs to create garden form
  const handleRefresh = () => {
    fetch("/remove", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setShowCropData(false)
        setCurrentGarden(null)
      }
    });
  }


  // setIsLoggedIn(false)
        // setUser(null);
        // history.push('/login')



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
      {currentGarden ? <button id="create-new-garden-btn" onClick={handleRefresh}>Save and Create New Garden</button> : null }
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