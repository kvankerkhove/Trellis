import React from 'react'

function LogIn({handleUserLogin}) {

  const handleLogin = async (e) => {
    e.preventDefault()
    let form = new FormData(document.querySelector("#login-form"))
    let req = await fetch("/login", {
      method: "POST",
      body: form,
    })
    let user = await req.json()
    handleUserLogin(user)
  }

  return (
    // <div>testing</div>
    <form id='login-form' action="" method="post" name="login" style={{position:"relative"}} onSubmit={handleLogin}>
      <div style={{backgroundColor: "white", padding:"5%", borderStyle:"solid", borderRadius:"1%"}}>
          <div className="form-group">
            <input type="text" name="username" className="form-control" id="email" aria-describedby="usernameHelp" placeholder="Enter Username"/>
          </div>
          <hr className="hr-or"/>
          <div className="form-group">
            <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" autoComplete="current-password"/>
          </div>
          <hr className="hr-or"/>
          <div className="col-md-12 text-center ">
            <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
          </div>
          <div className="col-md-12 ">
            <div className="login-or">
                <hr className="hr-or"/>
                <span className="span-or">or</span>
            </div>
          </div>
          <div className="form-group">
            <p className="text-center">Don't have account? <a href="/signup" id="signup">Sign up here</a></p>
          </div>
      </div>
    </form>
  )
}

export default LogIn