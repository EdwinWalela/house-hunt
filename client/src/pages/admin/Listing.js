import React from 'react'
import PropTypes from 'prop-types'
import ListingDetails from './ListingDetails';

function Listing(props) {
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src="https://picsum.photos/200" />
            <p style={textStyle}>Newly Built 3 Bedroom Penthouse on Riverside Drive,Nairobi</p>
            <ListingDetails />
        </div>
    )
}

const containerStyle = {
    overflow:"hidden",
    padding:"20px",
    border:"solid 1px",
    width:"95%",
    minWidth:"300px",
    maxWidth:"450px",
    margin:"20px auto",
    height:"150px"
}

const imageStyle = {
    width:"30%",
    height:"100%",
}

const textStyle = {
    fontSize:"0.8em",
    paddingLeft:"20px",
    width:"60%",
    display:"inline-block",
    position:"relative",
    bottom:"60px",

}

Listing.propTypes = {

}

export default Listing

