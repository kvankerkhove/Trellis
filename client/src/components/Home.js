import React from 'react'
import './Home.css'

function Home({isLoggedIn, user}) {
  return (
    <div>
      <div id="home-page-top-picture">
        { isLoggedIn ? <h1 id="welcome">Welcome, {user.first_name}</h1> : null }
      </div>

    </div>

  )
}

export default Home