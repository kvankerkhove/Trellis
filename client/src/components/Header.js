import React from 'react'
import SelectCropDropdown from './SelectCropDropdown'

function Header({crops, handleSelectedCrop, selectedCrop}) {
  return (
    <div>
      <h1>Start designing your garden!</h1>
      <h2>Use the drop down menu to choose a crop and add to your garden grid. Each square represents <em>1 square foot</em></h2>
      <SelectCropDropdown crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop}/>
    </div>
  )
}

export default Header