import React,{ Component } from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps"
  
import { compose } from "recompose"

import PropTypes from 'prop-types'

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {
    return (
      <GoogleMap defaultZoom={11} defaultCenter={{ lat: -1.28, lng: 36.81 }}>

      </GoogleMap>
    )
})

class Commute extends Component {
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
        <React.Fragment>
            <h1 style={titleStyle}>Commute</h1>
            <MapWithAMarker
                googleMapURL="https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=nairobi+kenya&destination=kisumu+kenya&avoid=tolls|highways"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px`, width:"90%", margin:"20px auto" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </React.Fragment>
      )
    }
  }


const titleStyle = {
    fontSize:"1.3em"
}

Commute.propTypes = {

}

Commute.defaultProps = {
    shelters: [],
};

export default Commute

