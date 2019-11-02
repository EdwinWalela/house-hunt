import React, { Component } from 'react'
import { compose } from "recompose"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps"

import PropTypes from 'prop-types'

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
    return (
        
      <GoogleMap defaultZoom={13} defaultCenter={props.center}>
        {props.markers.map(marker => {
          const onClick = props.onClick.bind(this, marker)
          return (
            <Marker
              key={marker.id}
              onClick={onClick}
              position={{ lat: marker.coords.lat, lng: marker.coords.lng }}
            >
              {props.selectedMarker === marker &&
                <InfoWindow>
                  <div>
                    {marker.name}<br/>
                    {marker.opened ? "Opened" : "Closed"}<br/>
                    {"rating :"+marker.rating}<br/>
                  </div>
                </InfoWindow>}
    
            </Marker>
          )
        })}
      </GoogleMap>
    )
})

class Neighborhood extends Component {
    constructor(props) {
      super(props)
      this.state = {
        shelters: [
            ...this.props.shops,
            ...this.props.medics,
            ...this.props.restaurants,
            ...this.props.gyms
        ],
        selectedMarker: false
      }
    }
    handleClick = (marker, event) => {
      this.setState({ selectedMarker: marker })
    }
    render() {
      return (
            <div style={containerStyle}>
                <h1 style={titleStyle}>Areas of Interest Around {this.props.location}</h1>
                <MapWithAMarker
                    center={this.props.center}
                    selectedMarker={this.state.selectedMarker}
                    markers={this.state.shelters}
                    onClick={this.handleClick}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAx5bVVPhoquI4sJHpJUb4NTpTuVout3EA&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={mapStyle} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
      )
    }
  }

  const containerStyle = {
 
    height:"500px",
    textAlign:"center",
    width:"90%",
    maxWidth:"400px",
    display:"inline-block",
    marginRight:"60px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
  }

  const mapStyle ={
    height: `360px`,
    padding:"10px",
 }

  const titleStyle = {
      fontSize:"1em",
      textTransform:"capitalize"
  }

  
export default Neighborhood;