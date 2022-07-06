import React from 'react'
import './SeedTable.css'

function SeedTable({currentGardenSquares}) {
    let hashMap = {}
    currentGardenSquares.forEach((square) => {
        // console.log(square.id)
        // console.log(Object.keys(hashMap).includes(square.id))
        if(Object.keys(hashMap).includes(square.id.toString())){
            hashMap[square.id] = hashMap[square.id] + +square.plants_per_sq_ft

        } else {
            hashMap[square.id] = +square.plants_per_sq_ft
        }
    })

    let keys = Object.keys(hashMap)
    let values = Object.values(hashMap) 
    let updated_values = values.map(value => Math.ceil(value * 1.33))

    let yieldMap = {}
    currentGardenSquares.forEach((square) => {
        // console.log(square.id)
        // console.log(Object.keys(hashMap).includes(square.id))
        if(Object.keys(yieldMap).includes(square.id.toString())){
            yieldMap[square.id] = +yieldMap[square.id] + +square.projected_yield

        } else {
            yieldMap[square.id] = square.projected_yield
            // console.log(yieldMap)
        }
    })

    // console.log(yieldMap)

    let crops = Object.keys(yieldMap)
    let yields = Object.values(yieldMap) 
    // console.log(crops)
    // console.log(yields)
    let unitValues = crops.map(crop => {
        return currentGardenSquares.find((square) => square.id === +crop).yield_unit
    })
    // console.log(unitValues)

    // console.log(hashMap)
    // console.log(keys)
    // console.log(updated_values)

    const renderNeededSeeds = keys.map(key => {
        // let changeToNum = +key
        let plant = currentGardenSquares.find(square => square.id === +key)
        let totalNumOfPlants = currentGardenSquares.filter(square => square.id === +key).length
        // console.log(totalNumOfPlants)
        
        return (
        <tr>
            <td>{plant.name}</td>
            <td>{plant.plants_per_sq_ft}</td>
            <td>{plant.plants_per_sq_ft * totalNumOfPlants}</td>
            <td>{updated_values[keys.indexOf(key)]}</td>
            <td>{yields[keys.indexOf(key)] + " " + unitValues[keys.indexOf(key)]}</td>
        </tr>
        )
    })

    // console.log(renderNeededSeeds)
  return (
    <div id='seed-table-container'>
         <table id="seed-table">
            <thead>
                <tr>
                    <th className="column">Crop</th>
                    <th className="column"> Plants/sq.ft</th>
                    <th className="column">Total Plants</th>
                    <th className="column">Total Seeds Needed*</th>
                    <th className="column">Projected Total Yield</th>
                </tr>
            </thead>
            <tbody>
                {renderNeededSeeds}
            </tbody>
        </table>
        <small>*Total Seeds is 33% more than Total Plants needed to account for any germination failures</small>
    </div>
  )
}

export default SeedTable