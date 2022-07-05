import React, {useEffect, useState} from 'react'
import MyGardenItem from './MyGardenItem'

function MyGardens({user, setCurrentGarden}) {
  const [myGardens, setMyGardens] = useState([])

  // if(!user) return null

  console.log(user)
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
    <div>
      {renderGardens}
    </div>
  )
}

export default MyGardens