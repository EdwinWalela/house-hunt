import React from 'react'

export default function NoResults(props) {
    let error = props.error;
    return (
        <div style={containerStyle}>
            {error ? "Network Error." : "..."}
        </div>
    )
}

const containerStyle = {
    margin:"200px auto",
    textAlign:"center",
    fontSize:"1em"
}