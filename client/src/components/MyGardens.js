import React, {useEffect, useState} from 'react'
import MyGardenItem from './MyGardenItem'
import './MyGardens.css'

function MyGardens({user, setCurrentGarden}) {
  const [myGardens, setMyGardens] = useState([])
  // const [updatedGardens, setUpdatedGardens] = useState(myGardens)

  // if(!user) return null
  

  const userId = user.id

  useEffect(() => {
    fetch(`/all_gardens/${userId}`)
    .then(r => r.json())
    .then(data => setMyGardens(data))
  }, [])

  const handleDelete = (deletedGarden) => {
    const remainingGardens = myGardens.filter(garden => garden.id !== deletedGarden.id)
    setMyGardens(remainingGardens)
  }


  const renderGardens = myGardens.map(garden => {
    return <MyGardenItem key={garden.id} garden={garden} setCurrentGarden={setCurrentGarden} handleDelete={handleDelete}/>
  })



  return (
    <div className="contain">
      { myGardens.length === 0 ? <h1 className="my-garden-header">Build your first garden <a href='/create_garden'>here</a></h1> : <h1 className="my-garden-header">Select a garden to keep editing or delete</h1> }
      <div class="row">
        <div class="row__inner">
          {renderGardens}
        </div>
      </div>
    </div>
  )
}

export default MyGardens

{/* <div id="my-gardens-page"> */}