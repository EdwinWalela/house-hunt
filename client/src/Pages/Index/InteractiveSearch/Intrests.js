import React from 'react'
import PropTypes from 'prop-types'

// F3A712 - Tangerine
// 29335C - Purple

function Interests(props) {
    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Workplace/Institution <i style={infoIconStyle} className="far fa-question-circle"></i></p>
            <input className="search-input" style={inputStyle} type="text" placeholder="CBD"/>
            <button style={buttonStyle}>Search</button>
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
    padding:"5px",
    width:"80%",
    fontSize:"1.1em",
    letterSpacing:"1.3px",
    textTransform:"capitalize",
    textAlign:"center",
}

const infoIconStyle = {
    color:"grey",
}

const buttonStyle = {
    display:"block",
    padding:"8px 10px",
    margin:"20px auto",
    border:"none",
    width:"80%",
    background:"#1B98E0",
    color:"#fff"
}

Interests.propTypes = {

}

export default Interests

