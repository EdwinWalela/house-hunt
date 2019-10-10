import React from 'react'
import PropTypes from 'prop-types'

function InputBar(props) {
    return (
        <div style={containerStyle}>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Where</label>
                <input style={inputStyle} type="text" name="location" placeholder="Nairobi" />
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Bedrooms</label>
                <input style={inputStyle} type="number" name="beds" placeholder="3" />
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Budget</label>
                <input style={inputStyle} type="number" name="budget" placeholder="18000" />
            </div>
        </div>
    )
}

const containerStyle = {
    borderBottom:"2px solid #29335C",
    paddingBottom:"10px",
}

const inputGroupStyle = {
    textAlign:"center",
    width:"30%",
    margin:"5px",
    display:"inline-block"
}

const inputStyle = {
    textAlign:"center",
    fontSize:"1em",
    padding:"5px 0px",
    marding:"5px",
    width:"100%",
    textTransform:"capitalize",
    letterSpacing:"1.1px"
}

const labelStyle = {
    fontSize:"0.8em",
    color:"#29335C"
}

InputBar.propTypes = {

}

export default InputBar

