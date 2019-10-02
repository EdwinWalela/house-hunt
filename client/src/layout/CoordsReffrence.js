import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { geolocated } from 'react-geolocated';

class CoordsReffrence extends Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
          <p style={infoStyle}>Sorrry, your browser doesnot support Geolocation</p>
        ) : !this.props.isGeolocationEnabled ? (
            <p style={infoStyle}>Geolocation is not enabled</p>
        ) : this.props.coords ? (
            <div>
                <p style={infoStyle}>Current Geocoordinates</p>
                <input name="location" style={locationStyle} type="text" placeholder="2"  onChange={this.props.handleInputChange} value={`${this.props.coords.latitude},${this.props.coords.longitude}`}/> 
            </div>
        ) : (
            <p style={infoStyle}>Getting the location data&hellip;</p>
        )
    }
}

const infoStyle = {
    color:"#fff",
    margin:"10px auto 5px auto"

}

const locationStyle = {
    padding:"5px",
    fontSize:"0.8em",
    letterSpacing:"1px",
    display:"inline-block",
    margin:"5px auto",
    border:"none",
    borderRight:"solid 1px #1B98E0",
    width:"99%",
    textAlign:"center",
}


export default geolocated({
    positionOptions:{
        enableHighAccuracy:true,
    },
    userDecisionTimeout:5000,
})(CoordsReffrence);