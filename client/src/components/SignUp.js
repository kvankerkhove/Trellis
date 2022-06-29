import React, { useState } from 'react'
import './SignUp.css'

function SignUp({handleUserLogin}) {
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()
    let form = new FormData(document.querySelector("#signup-form"))
    let req = await fetch("/signup", {
      method: "POST",
      body: form,
    })

    if(req.ok){
      let user = await req.json()
      handleUserLogin(user)
    } else {
      let err = await req.json()
      console.log(err.errors)
    }
    
  }

  const createZones = () => {
    let hardinessZones = []
    for( let i = 1; i <= 13; i++ ){
      hardinessZones.push(`${i}a`, `${i}b`)
    }
    
    const renderZones = hardinessZones.map(zone => {
      return <option>{zone}</option>
    })

    return renderZones
  }

  const handlePasswordChange = (e) => {
    let input = e.target.value
    setPassword(input)
  }

  const handlePasswordConfirmationChange = (e) => {
    let input = e.target.value
    setPasswordConfirmation(input)
  }

  console.log(password)
  console.log(passwordConfirmation)

  return (
    <form onSubmit={handleSignup} id="signup-form" class="container-fluid" style={{position:"relative"}}>
            <div style={{position: "absolute", left:"30%", right:"30%", border:"1px", borderStyle:"solid", paddingTop:"3%", paddingBottom: "2%", borderColor:"black", backgroundColor: "white", borderRadius: "5px"}}>

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputFirstName">First Name</label>
                        <div class="col-auto">
                            <input
                            class="form-control"
                            type="text"
                            id="first_name"
                            autoComplete="off"
                            placeholder='first name'
                            name='first_name'
                            />
                        </div>
                </div>

                <hr/>
                
                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputLastName">Last Name</label>
                        <div class="col-auto">
                            <input
                            class="form-control"
                            type="text"
                            id="last_name"
                            autoComplete="off"
                            placeholder='last name'
                            name='last_name'
                            />
                        </div>
                </div>

                <hr/>

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputLastName">Plant Hardiness Zone</label>
                        <div class="col-auto">
                          <select id="zone" name="plant_hardiness_zone">
                            <option>Choose Zone</option>
                            {createZones()}
                          </select>
                        </div>
                </div>

                

                <hr/>

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputUsername">Username</label>
                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="text"
                        id="username"
                        autoComplete="off"
                        placeholder='username'
                        name='username'
                        />
                    </div>
                </div>
                
                <hr/>

                <div class="row justify-content-md-center">

                    <label class="col-sm-2 col-form-label" for="inputPassword">Password</label>


                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="password"
                        id="password"
                        placeholder='password'
                        name='password'
                        onChange={handlePasswordChange}
                        />
                    </div>
                </div>

                <hr />

                <div class="row justify-content-md-center">
                    <label class="col-sm-2 col-form-label" for="inputPassword">Confirm Password</label>

                    <div class="col-auto">
                        <input
                        class="form-control"
                        type="password"
                        id="password_confirmation"
                        placeholder='password confirmation'
                        name='password_confirmation'
                        onChange={handlePasswordConfirmationChange}
                        />
                        { password !== "" && password === passwordConfirmation ? <small>✅</small> : <small></small>}
                    </div>
                </div>
                <hr />
            <button type="submit" class="btn btn-outline-primary">Sign Up</button>


            </div>
        </form>
  )
}

export default SignUp