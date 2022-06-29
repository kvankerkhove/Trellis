import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar({isLoggedIn, handleLogout}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        // setIsLoggedIn(false)
        // setUser(null);
        // history.push('/login')
        handleLogout(r)
      }
    });
  }

  let links

  if (isLoggedIn) {        
      links = 
      <>
        <Link to='/logout' exact>
          <button onClick={handleLogoutClick}>Logout</button>
        </Link>
      </>
  } else {
      links = 
      <>
        <Link class='link' exact to='/login'>
          Login
        </Link>
        <Link class='link' exact to='/signup'>
          Signup
        </Link>
      </>
  }


  return (
    <div class='container circleBehind'>
      <div class='padding'>
        <div className='nav-first-half'>
          <Link class='link' exact to='/'>
            Home
          </Link>
          <Link class='link' exact to='/crops'>
            Crops
          </Link>
          <Link class='link' exact to='/create_garden'>
            Create Garden
          </Link>
          <Link class='link' exact to='/my_gardens'>
            My Gardens
          </Link>
        </div>
        <div className='nav-second-half'>
          {links}
        </div>
      </div>
    </div>
  )
}

export default NavBar