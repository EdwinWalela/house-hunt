/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class Map extends Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const directionsService = new window.google.maps.DirectionsService();

    const origin = this.props.listingCoords;
    const destination = this.props.reffPoint;
    console.log(origin)
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          console.error(`sucess fetching directions ${result}`);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

  render() {
    let duration = this.state.directions ? this.state.directions.routes[0].legs[0].duration.text.split(' ') : []
    const GoogleMapExample = withGoogleMap(props => (
        <React.Fragment>
        <GoogleMap
            defaultCenter={this.props.listingCoords}
            defaultZoom={13}
        >
            <DirectionsRenderer
            directions={this.state.directions}
            />
        </GoogleMap>
        {this.state.directions ?
            <div style={commuteInfoContainerStyle}>
                <p style={infoRightBorderStyle}>{Math.floor(this.state.directions.routes[0].legs[0].distance.value/1000)} <br/><span  style={{color:"rgba(0,0,0,0.6)",fontSize:"0.9em"}}>km</span></p>
                <p style={commuteInfoTextStyle}>{duration[0]} <br/><span style={{color:"rgba(0,0,0,0.6)",fontSize:"0.9em"}}>{duration[1]}</span></p>
            </div>
        :
            <p>Calculating commute...</p>
        }
      </React.Fragment>
    ));

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>Commute</h1>
        <GoogleMapExample
          containerElement={<div style={mapContainerStyle} />}
          mapElement={<div style={{ height: "300px" }} />}
        />
      </div>
    );
  }
}

const containerStyle = {
    textAlign:"center",
    width:"90%",
    maxWidth:"400px",
    display:"inline-block",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
}

const mapContainerStyle = {
    width:"100%",
    height:"400px",
    borderRadius:"10px",
    padding:"10px",
    
}

const titleStyle = {
    fontSize:"1em"
}

const infoTitleStyle = {
    margin:"10px 0"
}

const commuteInfoContainerStyle = {
    margin:"15px 0",
    textVerticalAlign:"center",
    height:"30px",
}

const commuteInfoTextStyle = {
    fontSize:"1.1em",
    display:"inline-block",
    width:"45%",
}

const infoRightBorderStyle = {
    ...commuteInfoTextStyle,
    borderRight:"solid 2px #D3424E"
}



export default Map;

