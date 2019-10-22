import React from 'react'
import PropTypes from 'prop-types'

function InputBar(props) {
    return (
        <div style={containerStyle}>
            <div style={iconGroup}>
                <i class="fas fa-chevron-left"></i>
            </div>
            <div style={locationStyle}>
                <input style={inputStyle} type="text" name="location" placeholder="Location" value={props.location} onChange={props.updateSearchParams}/>
            </div>
            <div style={inputGroupStyle}>
                <input style={inputStyle} type="number" name="beds" placeholder="Beds" value={props.beds} onChange={props.updateSearchParams}/>
            </div>
            <div style={locationStyle}>
                <input style={inputStyle} type="number" name="budget" placeholder="Budget" value={props.budget} onChange={props.updateSearchParams}/>
            </div>
            <div style={iconGroup}>
                <i class="fas fa-search"></i>
            </div>
        </div>
    )
}

const containerStyle = {
    border:"1px solid",
    textAlign:"center",
    padding:"10px 5px"
}

const inputGroupStyle = {
    textAlign:"center",
    width:"15%",
    margin:"5px",
    display:"inline-block"
}

const inputStyle = {
    textAlign:"center",
    fontSize:"1em",
    padding:"0px",
    marding:"5px",
    width:"100%",
    textTransform:"capitalize",
}

const locationStyle = {
    ...inputGroupStyle,
    width:"25%",
}

const iconGroup = {
    ...inputGroupStyle,
    width:"10%",
    fontSize:"1.2em",
    marginRight:"2.5px"
    
}

InputBar.propTypes = {

}

export default InputBar

