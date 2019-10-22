import React from 'react'
import PropTypes from 'prop-types'

function InputBar(props) {
    return (
        <div style={containerStyle}>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Where</label>
                <input style={inputStyle} type="text" name="location" placeholder="Nairobi" value={props.location} onChange={props.updateSearchParams}/>
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Bedrooms</label>
                <input style={inputStyle} type="number" name="beds" placeholder="3" value={props.beds} onChange={props.updateSearchParams}/>
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Budget</label>
                <input style={inputStyle} type="number" name="budget" placeholder="18000" value={props.budget} onChange={props.updateSearchParams}/>
            </div>
        </div>
    )
}

const containerStyle = {
    padding:"5px",
    background:"#D3424E",
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
    letterSpacing:"1.1px",
    border:"none"
}

const labelStyle = {
    fontSize:"0.8em",
    color:"#fff"
}

InputBar.propTypes = {

}

export default InputBar

