import React, { useState } from 'react'
import Errors from './Errors'

function CreateGardenDropdown({user, handleCurrentGarden}) {
    const [errors, setErrors] = useState([])
    if(!user) return null
    const user_id = +user.id
    console.log(user_id)

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

    console.log(errors)

  return (
    <div>
        <form onSubmit={handleCreateGarden} id="create-garden-form">
            <input type="text" name="name" placeholder='a name for your garden'/>
            <input type="text" name="rows" placeholder='length in ft'/>
            <input type="text" name='columns' placeholder='height in ft'/>
            <button type="submit">submit</button>
        </form>
        { errors !== [] ? <Errors errors={errors}/> : null }
    </div>
  )
}

export default CreateGardenDropdown