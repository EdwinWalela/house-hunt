import React from 'react'

function About() {
    return (
        <div style={containerStyle}>
            <h1 style={sloganStyle}>How It Works.</h1>
            <p></p>
        </div>
    )
}

const containerStyle = {
    height:"500px",
}

const sloganStyle = {
    fontSize:"1.5em",
    color:"#1B98E0",
    marginBottom:"20px",
    textAlign:"center",

}


export default  About