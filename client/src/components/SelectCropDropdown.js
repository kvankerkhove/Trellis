import React from 'react'
import './SelectCropDropdown.css'

function SelectCropDropdown({crops, handleSelectedCrop, selectedCrop}) {
    if (!crops) return null

    const allCropsExceptFallow = crops.filter(crop => crop.name !== "Fallow")

    const fallow = crops.find(crop => crop.name === "Fallow")

    const renderCrops = allCropsExceptFallow.map(crop => {
        return <option key={crop.id} className="option" id={crop.id}>{crop.name}</option>
    })

    const handleOnChange = (e) => {
        const chosenCrop = crops.find(crop => crop.name === e.target.value)
        handleSelectedCrop(chosenCrop)
    }

  return (
    <div id="crop-dropdown-container">
        <div>
            <select id="crop-dropdown-bar" onChange={handleOnChange}>
                <option id={fallow.id} className="option">{fallow.name}</option>
                {renderCrops}
            </select>
        </div>
        <div id='crop-dropdown-tile'>
            <img id='crop-dropdown-pic' src= {require(`../images/${selectedCrop.image}`)} alt={selectedCrop.name}/>
        </div>
    </div>
  )
}

export default SelectCropDropdown