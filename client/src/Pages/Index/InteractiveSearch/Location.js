import React from 'react'
import PropTypes from 'prop-types'

function Location(props) {
    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Choose a Location</p>
            <input style={inputStyle} type="text" placeholder="Start typing ..."/>
            <button style={buttonStyle}>Next</button>
        </div>
    )
}

const containerStyle = {
    background:"rgba(255,255,255,0.8)",
    borderRadius:"5px",
    padding:"20px",
    margin:"20px auto",
    width:"90%",
    height:"200px",
    textAlign:"center"
}

const titleStyle = {
    fontWeight:"500",
}

const inputStyle = {
    display:"block",
    margin:"20px auto",
    border:"none",
    borderBottom:"solid 2px #D3424E",
    background:"transparent",
    padding:"5px",

}

const buttonStyle = {
    display:"block",
    padding:"8px 10px",
    margin:"20px auto",
    border:"none",
    width:"80%",
    background:"#D3424E",
    color:"#fff"
}

Location.propTypes = {

}

export default Location

