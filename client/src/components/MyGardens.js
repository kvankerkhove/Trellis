import React, {useEffect, useState} from 'react'
import MyGardenItem from './MyGardenItem'
import './MyGardens.css'

function MyGardens({user, setCurrentGarden}) {
  const [myGardens, setMyGardens] = useState([])

  // if(!user) return null
  

  const userId = user.id

  useEffect(() => {
    fetch(`/all_gardens/${userId}`)
    .then(r => r.json())
    .then(data => setMyGardens(data))
  }, [])


  const renderGardens = myGardens.map(garden => {
    return <MyGardenItem key={garden.id} garden={garden} setCurrentGarden={setCurrentGarden}/>
  })



  return (
    <div className="contain">
      { myGardens.length === 0 ? <h1 id="link">Build your first garden <a href='/create_garden'>here</a></h1> : null }
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