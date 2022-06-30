import React, { useState } from 'react'
import Errors from './Errors'

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
    <form id='login-form' onSubmit={handleLogin}>
      <div style={{backgroundColor: "white", padding:"5%", borderStyle:"solid", borderRadius:"1%"}}>
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
            <button type="submit">Login</button>
          </div>
          { errors !== [] ? <Errors errors={errors}/> : null }
          <div>
            <div>
                <br></br>
                <small>or</small>
            </div>
          </div>
          <div>
            <p>Don't have account? <a href="/signup" id="signup">Sign up here</a></p>
          </div>
      </div>
    </form>
  )
}

export default LogIn