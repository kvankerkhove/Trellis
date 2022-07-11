import React, { useState } from 'react'
import './SelectCropDropdown.css'

function SelectCropDropdown({crops, handleSelectedCrop, selectedCrop}) {
    const [cropIsChosen, setCropIsChosen] = useState(false)
    if (!crops) return null

    const renderCrops = crops.map(crop => {
        return <option key={crop.id} id={crop.id}>{crop.name}</option>
    })

    const handleOnChange = (e) => {
        const chosenCrop = crops.find(crop => crop.name === e.target.value)
        if(e.target.value !== 'Select Crop'){
            setCropIsChosen(true)
        } else {
            setCropIsChosen(false)
        }
        handleSelectedCrop(chosenCrop)
    }

  return (
    <div>
        <select onChange={handleOnChange}>
            <option>Select Crop</option>
            {renderCrops}
        </select>
        {cropIsChosen ? <img id='crop-dropdown-tile' src= {require(`../images/${selectedCrop.image}`)} alt={selectedCrop.name}/> : null}
    </div>
  )
}

export default SelectCropDropdown