import React from 'react'
import PropTypes from 'prop-types'

function InterestBar(props) {
    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Areas Of interest</p>
            <div style={inputGrpContainer}>
                <div style={inputGroupStyle}>
                    <input type="checkbox" />
                    <label style={labelStyle}>Shopping Centers</label>
                </div>
                <div style={inputGroupStyle}>
                    <input type="checkbox" />
                    <label style={labelStyle}>Gyms</label>
                </div>
                <div style={inputGroupStyle}>
                    <input type="checkbox" />
                    <label style={labelStyle}>Medical Centers</label>
                </div>
                <div style={inputGroupStyle}>
                    <input type="checkbox" />
                    <label style={labelStyle}>Restaurants/Bars</label>
                </div>
            </div>
        </div>
    )
}

const containerStyle = {
    border:"solid 1px",
    margin:"10px auto",
    padding:"10px"
}

const titleStyle = {
    fontSize:"0.85em"
}

const inputGrpContainer = {
    width:"75%",
}

const inputGroupStyle = {
    display:"inline-block",
    width:"50%",
}

const labelStyle = {
    fontSize:"0.7em",
    marginLeft:"10px",
}

InterestBar.propTypes = {

}

export default InterestBar

