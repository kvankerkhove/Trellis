import React, {useEffect, useState} from 'react'
import MyGardenItem from './MyGardenItem'
import './MyGardens.css'

function MyGardens({user, setCurrentGarden}) {
  const [myGardens, setMyGardens] = useState([])
  
  //fetch request to retrieve all of a users gardens, only reruns the effect if user changes
  useEffect(() => {
    if (user) {
      fetch(`/api/all_gardens/${user.id}`)
      .then(r => r.json())
      .then(data => setMyGardens(data))
    }
  }, [user])

  //deletes a garden from a users gardens
  const handleDelete = (deletedGarden) => {
    const remainingGardens = myGardens.filter(garden => garden.id !== deletedGarden.id)
    setMyGardens(remainingGardens)
    setCurrentGarden(null)
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
