import React from 'react'
import SelectCropDropdown from './SelectCropDropdown'
import CreateGardenDropdown from './CreateGardenDropdown'
import './Header.css'

function Header({crops, handleSelectedCrop, selectedCrop, user, handleCurrentGarden, currentGarden}) {
  if(!user) return null
  console.log(user)
  return (
    <div id="dropdown">
      {!currentGarden ?
      <div id="create-garden-dropdown">
        <h1>Welcome, {user.first_name}</h1>
        <h1>Start designing your garden!</h1>
        <h2>First, choose a name for your garden and the dimensions of your plot (ft x ft)</h2>
        <CreateGardenDropdown user={user} handleCurrentGarden={handleCurrentGarden}/>
      </div>
      :
      <div id="select-crop-dropdown">
        <h2>Use the drop down menu to choose a crop and add to your garden grid. Each square represents <em>1 square foot</em></h2>
        <SelectCropDropdown crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop}/>
      </div>
      }
    </div>
  )
}

export default Header