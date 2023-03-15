import React, { useEffect, useState } from 'react'
import './SeedTable.css'
import moment from 'moment'

function Schedule({currentGarden, refresh}) {
  const [cropSquares, setCropSquares] = useState([])
  const [scheduleUpdate, setScheduleUpdate] = useState(true)

  useEffect(() => {
    fetch(`/api/all_squares/${currentGarden.id}`)
    .then(r => r.json())
    .then(squares => {
      let filteredSquares = squares.filter(square => square.crop_id !== 1)
      setCropSquares(filteredSquares)
      })
  }, [refresh, scheduleUpdate])

  let cropMap = {}

  //creates crop map with name of crop and number of times that crop appears in squares, stores in cropMap
  cropSquares.forEach((square) => {
    if(Object.keys(cropMap).includes(square.crop.name)){
      cropMap[square.crop.name] += 1

    } else {
      cropMap[square.crop.name] = 1
    }
  })

  //array of keys and values of cropMap
  const crops = Object.keys(cropMap)
  const numberOfCrops = Object.values(cropMap)

  //function that renders each row of the schedule table, each row contains one crop with the date planted, days to maturity, and projected harvest date
  const renderCrops = crops.map(crop => {
    const date = cropSquares.find(square => square.crop.name === crop).start_date.slice(0, 10)
    const dtm = cropSquares.find(square => square.crop.name === crop).crop.days_to_maturity

    const harvestDate = (dtm, date) => {
      return moment(date, "YYYY-MM-DD").add(dtm, 'days').format("MM/DD/YYYY");
    } 

    let harvest = harvestDate(dtm, date)

    const cropSquareId = cropSquares.find(square => square.crop.name === crop).id

    const handleOnChange = (e) => {
      fetch(`/api/garden_squares/${cropSquareId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({start_date: e.target.value})
      })
      .then(r => r.json())
      .then(data => {
        setScheduleUpdate(scheduleUpdate => !scheduleUpdate)
      })
    }

    return (
      <tr key={crops.indexOf(crop)}>
        <td>{crop}</td>
        <td>{numberOfCrops[crops.indexOf(crop)]} sq.ft</td>
        <td><input onChange={handleOnChange} type="text" placeholder={date} onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} /></td>
        <td>{harvest}</td>
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
      <small>*DTM = Days To Maturity, from starting seed to harvest</small>
    </div>
  )
}

export default Schedule