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
    padding:"20px",
    border:"solid 1px",
    width:"90%",
    maxWidth:"400px",
    margin:"auto"
}

const imageStyle = {
    width:"100px",
    height:"100px"
}

const textStyle = {
    fontSize:"0.8em",
    paddingLeft:"20px",
    width:"72%",
    display:"inline-block",
    position:"relative",
    bottom:"30px"

}

Listing.propTypes = {

}

export default Listing

