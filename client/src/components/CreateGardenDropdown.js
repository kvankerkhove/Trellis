import React, { useState } from 'react'
import Errors from './Errors'
import './CreateGardenDropdown.css'

function CreateGardenDropdown({user, handleCurrentGarden}) {
    const [errors, setErrors] = useState([])
    if(!user) return null
    const user_id = +user.id
    console.log(user_id)

  //creates new garden and sets session to garden's id on backend
    const handleCreateGarden = async (e) => {
        e.preventDefault()
        let form = new FormData(document.querySelector("#create-garden-form"))
        form.append('user_id', user_id);
        let req = await fetch("/create_garden", {
          method: "POST",
          body: form,
        })

        if(req.ok){
            let garden = await req.json()
            handleCurrentGarden(garden)
        } else {
            let err = await req.json()
            setErrors(err.errors)
        }
    }


  return (
    <div id="create-garden-container">
        <form onSubmit={handleCreateGarden} id="create-garden-form">
          <div id="text-inputs">
            <small>name: </small>
            <input className="text-input" type="text" name="name"/>
          </div>
          <br></br>
          <div id="number-inputs">
            <small>height:</small>
            <input className="number-input" type="number" name="rows" min="3" max="10"/>
            <small>length:</small>
            <input className="number-input" type="number" name='columns' min="3" max="10"/>
          </div>
          <br></br>
          <button type="submit">submit</button>
        </form>
        { errors !== [] ? <Errors errors={errors}/> : null }
    </div>
  )
}

export default CreateGardenDropdown