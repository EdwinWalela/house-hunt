import React from 'react'
import PropTypes from 'prop-types'

// F3A712 - Tangerine
// 29335C - Purple

function Location(props) {
    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Choose a Location</p>
            <input className="search-input" style={inputStyle} type="text" placeholder="Start typing ..."/>
            <button style={buttonStyle}>Next</button>
            <i style={iconStyle} className="fas fa-map-marker-alt location-icon"></i>
        </div>
    )
}

const containerStyle = {
    background:"rgba(255,255,255,1)",
    borderRadius:"5px",
    padding:"20px",
    margin:"20px auto",
    width:"90%",
    maxWidth:"400px",
    height:"200px",
    textAlign:"center"
}

const titleStyle = {
    fontWeight:"500",
    color:"#29335C",
    letterSpacing:"1.2px",
}

const iconStyle = {
    position:"relative",
    display:"inline",
    right:"36%",
    bottom:"112px",
    color:"#F3A712",
}

const inputStyle = {
    display:"block",
    margin:"0px auto 20px auto",
    border:"none",
    borderBottom:"solid 2px #D3424E",
    background:"transparent",
    padding:"5px 5px 5px 30px",
    width:"80%",
    fontSize:"1.1em",
    letterSpacing:"1.3px",
    textTransform:"capitalize",
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

