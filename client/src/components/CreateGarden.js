import React, { useState } from 'react'
import Header from './Header'
import GardenGrid from './GardenGrid'
import GardenData from './GardenData'

function CreateGarden({crops}) {
  const [selectedCrop, setSelectedCrop] = useState(null)

  const handleSelectedCrop = (selectedCrop) => {
    setSelectedCrop(selectedCrop)
  }

  return (
    <div id="create-garden-page">
      <Header crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop}/>
      <GardenGrid selectedCrop={selectedCrop}/>
      <GardenData/>
    </div>
  )
}

export default CreateGarden