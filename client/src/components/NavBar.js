import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div class='container circleBehind'>
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
      <Link class='link' exact to='/login'>
        Login
      </Link>
      <Link class='link' exact to='/signup'>
        Signup
      </Link>
      <Link class='link' exact to='/logout'>
        Logout
      </Link>
    </div>
  )
}

export default NavBar