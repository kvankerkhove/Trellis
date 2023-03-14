import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../images/logo.png'

function NavBar({isLoggedIn, handleLogout}) {
  
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        handleLogout(r)
      }
    });
  }

  //initialize empty variable to later be assigned depending on if a user is logged in or not
  let links

  if (isLoggedIn) {        
    links = 
    <>
      <Link class='link' id='logout-button' onClick={handleLogoutClick}>Logout</Link>
    </>
  } else {
    links = 
    <>
      <Link class='link' exact to='/login'>Login</Link>
    </>
  }

  //if a user is logged in the create garden and my gardens link on the nav bar will show
  let gardenLinks = isLoggedIn ?
  <>
    <Link class='link' exact to='/create_garden'>
      Create Garden
    </Link>
    <Link class='link' exact to='/my_gardens'>
      My Gardens
    </Link>
  </>
  :
  null

  return (
    <div class='container circleBehind'>
      <div class='padding'>
        <div className='nav-first-half'>
          <Link exact to='/'>
            <img id='logo' src={logo} alt="logo"/>
          </Link>
          <Link class='link' exact to='/crops'>
            Crops
          </Link>
          {gardenLinks}
        </div>
        <div className='nav-second-half'>
          {links}
        </div>
      </div>
    </div>
  )
}

export default NavBar