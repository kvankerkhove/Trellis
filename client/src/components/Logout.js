import React from 'react'

function Logout({handleLogout}) {
  
  //when the log out button is clicked, a fetch request to the api is made to remove the session for both the current user and current garden
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        handleLogout()
      }
    });
  }

  return (
    <button onClick={handleLogoutClick}>logout</button>
  )
}

export default Logout