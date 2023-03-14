import React from 'react'

function Errors({errors}) {
    //this component is used by multiple other components that use forms to display any errors to the user
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