import React from 'react'

function Errors({errors}) {
    console.log(errors)
    const renderErrors = errors.map((error, i) => {
        return (
            <div key={i}>
                <small>{error}</small>
                <br></br>
            </div>
        )
    })
  return (
    <div style={{color: "red"}}>
        {renderErrors}
    </div>
  )
}

export default Errors