import React, { useState } from 'react'
import './SignUp.css'
import Errors from './Errors'

function SignUp({handleUserLogin}) {
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])

  const handleSignup = async (e) => {
    e.preventDefault()
    let form = new FormData(document.querySelector("#signup-form"))
    let req = await fetch("/api/signup", {
      method: "POST",
      body: form,
    })

    if(req.ok){
      let user = await req.json()
      handleUserLogin(user)
    } else {
      let err = await req.json()
      setErrors(err.errors)
    }
  }

  //generates and renders 26 hardiness zones, prevents repetition
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

  return (
    <div id="signup-page">
      <div id="signup-padding">
        <div id="signup-container">
          <h1>sign up to start growing</h1>
          <br></br>
          <form onSubmit={handleSignup} id="signup-form">
            <div>
              <label htmlFor="inputFirstName">first name<small style={{color: 'red'}}>*</small></label>
              <div>
                  <input
                  type="text"
                  id="first_name"
                  autoComplete="off"
                  placeholder='first name'
                  name='first_name'
                  />
              </div>

              <br></br>
                
              <div>
                <label htmlFor="inputLastName">last name<small style={{color: 'red'}}>*</small></label>
                <div>
                    <input
                    type="text"
                    id="last_name"
                    autoComplete="off"
                    placeholder='last name'
                    name='last_name'
                    />
                </div>
              </div>

              <br></br>

              <div>
                <label htmlFor="inputLastName">plant hardiness zone</label>
                <div>
                  <select id="zone" name="plant_hardiness_zone">
                    <option>Choose Zone</option>
                    {createZones()}
                  </select>
                </div>
                <small id="hardiness-zone">don't know your hardiness zone? check <a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noreferrer noopener">here</a></small>
              </div>
              <br></br>
              <div>
                <label htmlFor="inputUsername">username<small style={{color: 'red'}}>*</small></label>
                <div>
                    <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    placeholder='username'
                    name='username'
                    />
                </div>
              </div>
              
              <br></br>

              <div>
                <label htmlFor="inputPassword">password<small style={{color: 'red'}}>*</small></label>
                <div>
                    <input
                    type="password"
                    id="password"
                    placeholder='password'
                    name='password'
                    onChange={handlePasswordChange}
                    />
                </div>
              </div>

              <br></br>

              <div>
                <label htmlFor="inputPassword">confirm password<small style={{color: 'red'}}>*</small></label>
                <div>
                    <input
                    type="password"
                    id="password_confirmation"
                    placeholder='password confirmation'
                    name='password_confirmation'
                    onChange={handlePasswordConfirmationChange}
                    />
                    { password !== "" && password === passwordConfirmation ? <small>✅</small> : <small></small>}
                </div>
              </div>
              <br></br>
              <button type="submit" class="btn btn-outline-primary">sign up</button>
              { errors !== [] ? <Errors errors={errors}/> : null }
              <br></br>
              <div>
                  <p>click <a href="/login">here</a> to return to login</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default SignUp