import React from 'react'
import SelectCropDropdown from './SelectCropDropdown'
import CreateGardenForm from './CreateGardenForm'
import './Header.css'

function Header({crops, handleSelectedCrop, selectedCrop, user, handleCurrentGarden, currentGarden}) {

  if(!user) return null

  return (
    <div id="dropdown">
      {!currentGarden ?
      <div id="create-garden-dropdown">
        <h1>welcome, {user.first_name}</h1>
        <h1>start designing your garden!</h1>
        <h2>first, choose a name for your garden and the dimensions of your plot (ft x ft)</h2>
        <CreateGardenForm user={user} handleCurrentGarden={handleCurrentGarden}/>
      </div>
      :
      <div id="select-crop-dropdown">
        <h2>use the drop down menu to choose a crop and add to your garden grid. Each square represents <em>1 square foot</em></h2>
        <SelectCropDropdown crops={crops} handleSelectedCrop={handleSelectedCrop} selectedCrop={selectedCrop}/>
      </div>
      }
    </div>
  )
}

export default Header