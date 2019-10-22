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
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 29.5, lng: -95 }}>
        {props.markers.map(marker => {
          const onClick = props.onClick.bind(this, marker)
          return (
            <Marker
              key={marker.id}
              onClick={onClick}
              position={{ lat: marker.latitude, lng: marker.longitude }}
            >
              {props.selectedMarker === marker &&
                <InfoWindow>
                  <div>
                    {marker.shelter}
                  </div>
                </InfoWindow>}
              }
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
        shelters: [],
        selectedMarker: false
      }
    }
    handleClick = (marker, event) => {
      this.setState({ selectedMarker: marker })
    }
    render() {
      return (
        <MapWithAMarker
          selectedMarker={this.state.selectedMarker}
          markers={this.state.shelters}
          onClick={this.handleClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )
    }
  }

  
export default Neighborhood;