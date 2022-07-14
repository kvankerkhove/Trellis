import React, { useState } from 'react'
import Errors from './Errors'
import './LogIn.css'

function LogIn({handleUserLogin}) {
  const [errors, setErrors] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault()
    let form = new FormData(document.querySelector("#login-form"))
    let req = await fetch("/login", {
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

  return (
    <div id="login-page">
      <div id="login-padding">
        <div id="login-container">
          <h1>Welcome back.</h1>
          <small>Sign in to get growing.</small>
          <br></br>
          <form id='login-form' onSubmit={handleLogin}>
            <div>
                <div>
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="Enter Username"/>
                </div>
                <br></br>
                <div>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Enter Password" 
                    autoComplete="off"/>
                </div>
                <br></br>
                <div>
                  <button type="submit">login</button>
                </div>
                { errors !== [] ? <Errors errors={errors}/> : null }
                <div>
                  <div>
                      <br></br>
                      <small>or</small>
                  </div>
                </div>
                <div>
                  <p>don't have account? <a href="/signup" id="signup">sign up</a></p>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default LogIn

// style={{backgroundColor: "white", padding:"5%", borderStyle:"solid", borderRadius:"1%"}}