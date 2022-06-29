import React from 'react'

function Home({isLoggedIn, user}) {
  return (
    <div>
    { isLoggedIn ? 
    <>
      <h1>Welcome, {user.first_name}</h1> 
      <h2>Begin planning your garden.</h2>
    </>
    : null }

    </div>
  )
}

export default Home