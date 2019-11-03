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
    console.log(origin,destination)
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
          
        console.log("mid")
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
          console.error(`sucess fetching directions ${result}`);
        } else {
          console.error(`error fetching directions ${result}`);
        }
        console.log("HELLO")
      }
    );
    
    console.log("post")
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
                <p style={infoRightBorderStyle}>{Math.floor(this.state.directions.routes[0].legs[0].distance.value/1000)} <br/><span  style={{color:"rgba(255,255,255,0.6)",fontSize:"0.9em"}}>km</span></p>
                <p style={commuteInfoTextStyle}>{duration[0]} <br/><span style={{color:"rgba(255,255,255,0.6)",fontSize:"0.9em"}}>{duration[1]}</span></p>
                <br/>
                <div style={originStyle}>
                    <i class="fas fa-map-marker-alt"/><br/>
                    <span style={{
                        ...pointsStyle,
                        marginRight:"15px",
                    }}>From</span>
                    <p style={tripStyle}>{this.props.from}</p>
                </div>
                <div style={originStyle}>
                    <i class="fas fa-map-marker-alt"/><br/>
                    <span style={pointsStyle}>To</span>
                    <p style={tripStyle}>{this.props.reffPoint}</p>
                </div>
                <p style={infoStyle}>Traffic duration may differ.</p>
            </div>
        :
            <React.Fragment>
                <p>Calculating commute...</p>
            </React.Fragment>
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
         <p style={infoStyle}>Number of power outage reports via Twitter from 1/1/19 to 26/10/19</p>
      </div>
    );
  }
}

const containerStyle = {
    textAlign:"center",
    width:"90%",
    maxWidth:"400px",
    display:"inline-block",
    marginRight:"60px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
    height:"520px",
    overflow:"hidden"
}

const infoStyle = {
    fontSize:"0.7em",
    margin:"10px auto",
    color:"rgba(0,0,0,0.5)"
}

const mapContainerStyle = {
    width:"100%",
    height:"500px",
    borderRadius:"10px",
    padding:"10px",
}

const titleStyle = {
    fontSize:"1em"
}

const tripStyle = {
    fontSize:"0.8em",
    margin:"0px",
    textTransform:"capitalize"
}

const pointsStyle = {
    color:"rgba(0,0,0,0.7)",
    fontSize:"0.7em"
}

const originStyle = {
    display:"inline-block",
    width:"40%",
    margin:"5px",
    borderRadius:"5px",
    padding:"3px",
    border:"solid 2px #D3424E"
}

const commuteInfoContainerStyle = {
    margin:"15px 0",
    textVerticalAlign:"center",
    height:"30px",
}

const commuteInfoTextStyle = {
    fontSize:"1.1em",
    display:"inline-block",
    background:"#D3424E",
    color:"#fff",
    width:"20%",
    borderRadius:"5px",
    margin:"10px 5px"
}

const infoRightBorderStyle = {
    ...commuteInfoTextStyle,
    // borderRight:"solid 2px #D3424E"
}



export default Map;

