import React, { useState } from 'react'
import './SelectCropDropdown.css'

function SelectCropDropdown({crops, handleSelectedCrop, selectedCrop}) {
    // const [cropIsChosen, setCropIsChosen] = useState(false)
    if (!crops) return null

    const allCropsExceptFallow = crops.filter(crop => crop.name !== "Fallow")
    console.log(allCropsExceptFallow)

    const fallow = crops.find(crop => crop.name === "Fallow")
    console.log(fallow)

    const renderCrops = allCropsExceptFallow.map(crop => {
        return <option key={crop.id} className="option" id={crop.id}>{crop.name}</option>
    })

    const handleOnChange = (e) => {
        const chosenCrop = crops.find(crop => crop.name === e.target.value)
        // if(e.target.value !== 'Select Crop'){
        //     setCropIsChosen(true)
        // } else {
        //     setCropIsChosen(false)
        // }
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

{/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div> */}



export default SelectCropDropdown