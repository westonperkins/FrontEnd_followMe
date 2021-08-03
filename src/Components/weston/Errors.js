import React from 'react'

const Errors = ({msg}) => {
    const styling = {
        color: "red",
        textAlign: "center"
    }
    return (
        <div>
            <h5 style={styling}>
                {msg}
            </h5>
        </div>
    )
}

export default Errors
