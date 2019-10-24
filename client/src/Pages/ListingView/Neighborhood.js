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
      <GoogleMap defaultZoom={11} defaultCenter={{ lat: -1.28, lng: 36.81 }}>
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
        shelters: this.props.shops,
        selectedMarker: false
      }
    }
    handleClick = (marker, event) => {
      this.setState({ selectedMarker: marker })
    }
    render() {
      return (
        <React.Fragment>
            <h1 style={titleStyle}>Neighborhood</h1>
            <MapWithAMarker
                selectedMarker={this.state.selectedMarker}
                markers={this.state.shelters}
                onClick={this.handleClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px`, width:"90%", margin:"20px auto" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </React.Fragment>
      )
    }
  }

  const titleStyle = {
      fontSize:"1.2em"
  }

  
export default Neighborhood;