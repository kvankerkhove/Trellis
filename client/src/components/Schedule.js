import React, { useEffect, useState } from 'react'

function Schedule({currentGarden}) {
  const [cropSquares, setCropSquares] = useState([])
  
  useEffect(() => {
    fetch(`/all_squares/${currentGarden.id}`)
    .then(r => r.json())
    .then(squares => {
      let filteredSquares = squares.filter(square => square.crop_id !== 1)
      setCropSquares(filteredSquares)
      })
  }, [])

  // console.log(cropSquares)
  let cropMap = {}

  cropSquares.forEach((square) => {
    // console.log(square.updated_at.slice(0,10))
    if(Object.keys(cropMap).includes(square.crop.name)){
      cropMap[square.crop.name] += 1

    } else {
      cropMap[square.crop.name] = 1
    }

})

  

  // console.log(cropMap)
  const keys = Object.keys(cropMap)
  const values = Object.values(cropMap)
  // console.log(keys, values)

  const dates = keys.forEach((key) => {
    let crops = cropSquares.filter(square => square.crop.name === key)
    console.log(crops)

  })

  console.log(dates)


  return (
    <div>Schedule</div>
  )
}

export default Schedule