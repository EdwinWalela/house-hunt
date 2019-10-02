import React from 'react'
import PropTypes from 'prop-types'

function SearchFormGroup(props) {
    let locations = props.locations || [];
    let type = props.type;
    return (
        <div style={formGroup}>
            <label style={labelStyle}>{props.type}</label>
            { type === "location" ?
                <select name="location" style={selectStyle} type="text" placeholder="Any" onChange={props.handleInputChange}>
                    <option value="any">Anywhere</option>
                    {locations.map(location=>(
                        <option value={location.area}>{location.area}</option>
                    ))}
                </select> 
            :
            <React.Fragment></React.Fragment>
            }
            { type === "beds" ?
                <input name="beds" style={inputStyle} type="text" placeholder="2"  onChange={props.handleInputChange}/> 
            :
            <React.Fragment></React.Fragment>
            }
        </div>
    )
}


const formGroup = {
    display:"inline-block",
    width:"49%",
}

const labelStyle = {
    color:"#fff",
    display:"block",
    margin:"10px auto",
    textTranform:"capitalize"
}

const selectStyle = {
    textTranform:"capitalize",
    padding:"13px",
    backgroundColor:"#fff",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"inline-block",
    margin:"-1px auto",
    border:"none",
    borderRight:"solid 1px #1B98E0",
    width:"100%",
    textAlign:"center",
}


const inputStyle = {
    padding:"10px",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"inline-block",
    margin:"auto",
    border:"none",
    borderRight:"solid 1px #1B98E0",
    width:"100%",
    textAlign:"center",
}



SearchFormGroup.propTypes = {

}

export default SearchFormGroup

