import React from 'react'

function CreateGardenDropdown({user, handleCurrentGarden}) {
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
        let garden = await req.json()
        handleCurrentGarden(garden)
    }

  return (
    <form onSubmit={handleCreateGarden} id="create-garden-form">
        <input type="text" name="name" placeholder='a name for your garden'/>
        <input type="text" name="rows" placeholder='length in ft'/>
        <input type="text" name='columns' placeholder='height in ft'/>
        <button type="submit">submit</button>
    </form>
  )
}

export default CreateGardenDropdown