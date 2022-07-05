import React from 'react'

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
        <table>
        <tr>
          <th>Crop</th>
          <th>Plants/sq.ft</th>
          <th>Total Seeds Needed</th>
        </tr>
        {renderNeededSeeds}
      </table>
    </div>
  )
}

export default SeedTable