import React from 'react'
import './SeedTable.css'

function SeedTable({currentGardenSquares}) {
    console.log(currentGardenSquares)
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

    console.log(hashMap)
    console.log(keys)
    console.log(updated_values)

    const renderNeededSeeds = keys.map(key => {
        let changeToNum = +key
        let plant = currentGardenSquares.find(square => square.id === changeToNum)
        
        return (
        <tr>
            <td>{plant.name}</td>
            <td>{plant.plants_per_sq_ft}</td>
            <td>{updated_values[keys.indexOf(key)]}</td>
        </tr>
        )
    })

    // console.log(renderNeededSeeds)
  return (
    <div>
         <table id="seed-table">
            <thead>
                <tr>
                    <th className="column">Crop</th>
                    <th className="column"> Plants/sq.ft</th>
                    <th className="column">Total Seeds Needed</th>
                </tr>
            </thead>
            <tbody>
                {renderNeededSeeds}
            </tbody>
        </table>
    </div>
  )
}

export default SeedTable