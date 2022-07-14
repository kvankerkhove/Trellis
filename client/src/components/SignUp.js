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
    let req = await fetch("/signup", {
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
    <div id="signup-page">
      <div id="signup-padding">
        <div id="signup-container">
          <h1>Sign up to start growing</h1>
          <br></br>
          <form onSubmit={handleSignup} id="signup-form">
            <div>
              <label htmlFor="inputFirstName">First Name<small style={{color: 'red'}}>*</small></label>
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
                <label htmlFor="inputLastName">Last Name<small style={{color: 'red'}}>*</small></label>
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
                <label htmlFor="inputLastName">Plant Hardiness Zone</label>
                <div>
                  <select id="zone" name="plant_hardiness_zone">
                    <option>Choose Zone</option>
                    {createZones()}
                  </select>
                </div>
                <small id="hardiness-zone">Don't know your hardiness zone? Check <a href="https://planthardiness.ars.usda.gov/" target="_blank" rel="noreferrer noopener">here</a></small>
              </div>
              <br></br>
              <div>
                <label htmlFor="inputUsername">Username<small style={{color: 'red'}}>*</small></label>
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
                <label htmlFor="inputPassword">Password<small style={{color: 'red'}}>*</small></label>
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
                <label htmlFor="inputPassword">Confirm Password<small style={{color: 'red'}}>*</small></label>
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
              <button type="submit" class="btn btn-outline-primary">Sign Up</button>
              { errors !== [] ? <Errors errors={errors}/> : null }
              <br></br>
              <div>
                  <p>Click <a href="/login">here</a> to return to Login</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default SignUp