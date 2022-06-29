import React from 'react'

function Logout({handleLogout}) {
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
  return (
    <button onClick={handleLogoutClick}>Logout</button>
  )
}

export default Logout