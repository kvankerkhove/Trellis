import React, { useState } from 'react'
import Header from './Header'
import GardenGrid from './GardenGrid'
import GardenData from './GardenData'
import './CreateGarden.css'
import moment from 'moment'

function CreateGarden({crops, user, currentGarden, setCurrentGarden}) {
  const [selectedCrop, setSelectedCrop] = useState({
    "id": 1,
    "name": "Fallow",
    "family": "N/A",
    "plants_per_sq_ft": 0,
    "days_to_maturity": 0,
    "projected_yield": 0,
    "yield_unit": "n/a",
    "watering_needs": "n/a",
    "details": "n/a",
    "image": "fallow.png"
    })
    // const [refresh, setRefresh] = useState(true)
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
      fetch(`/api/all_squares/${gardenId}`, {
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
    fetch("/api/remove", { method: "DELETE" }).then((r) => {
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
        <div className="create">grow</div>
        <div className="create">
          <span>something beautiful</span>
        </div>
        {/* <h1 id="saying">create something beautiful</h1> */}
      </div>
      <Header crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop} user={user}  currentGarden={currentGarden} handleCurrentGarden={handleCurrentGarden}/>
      
      {currentGarden ? <GardenGrid selectedCrop={selectedCrop} currentGarden={currentGarden} height={height} width={width}/> : null } 
      
      {currentGarden ? <GardenData className="garden-data" currentGarden={currentGarden}/> : null }
      {currentGarden ? <button id="create-new-garden-btn" onClick={handleRefresh}>Save and Create New Garden</button> : null }

      <div id="create-garden-bottom-picture"></div>

      {/* <br></br> */}
      
    </div>
  )
}

export default CreateGarden


// handleCurrentGarden={handleCurrentGarden}


// {currentGarden ? <button id="button" onClick={handleDataClick}>{showCropData ? 'hide data' : 'show data'}</button>  : null}
