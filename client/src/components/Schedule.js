import React, { useEffect, useState } from 'react'
import './SeedTable.css'

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

  

  console.log(cropMap)
  const keys = Object.keys(cropMap)
  const values = Object.values(cropMap)
  // console.log(keys, values)

  // const dates = keys.forEach((key) => {
  //   let crops = cropSquares.filter(square => square.crop.name === key)
  //   console.log(crops)

  // })

  // console.log(dates)
  const renderCrops = keys.map(key => {
    const date = cropSquares.find(square => square.crop.name === key).start_date
    console.log(date)

    const dtm = cropSquares.find(square => square.crop.name === key).crop.days_to_maturity
    console.log(dtm)


    return (
      <tr>
        <td>{key}</td>
        <td>{values[keys.indexOf(key)]} sq.ft</td>
        <td><input type="date" value="2022-07-05"/></td>
        <td>harvest date</td>
        <td>{dtm}</td>
      </tr>
    )

  })



  return (
    <div id='seed-table-container'>
      <table id="seed-table">
          <thead>
              <tr>
                  <th className="column">Crop</th>
                  <th className="column">Total Square Feet</th>
                  <th className="column">Start Date</th>
                  <th className="column">Harvest Date</th>
                  <th className="column">DTM*</th>
              </tr>
          </thead>
          <tbody>
              {renderCrops}
          </tbody>
      </table>
      <small>*DTM = Days To Maturity; from starting seed to harvest</small>
    </div>
  )
}

export default Schedule