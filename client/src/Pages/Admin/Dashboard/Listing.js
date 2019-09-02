import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListingDetails from './ListingDetails';

function Listing(props) {
    return (
        <Link to="admin/edit">
            <div style={containerStyle}>
                <img style={imageStyle} src="https://picsum.photos/200" />
                <p style={textStyle}>Newly Built 3 Bedroom Penthouse on Riverside Drive,Nairobi</p>
                <ListingDetails />
            </div>
        </Link>
    )
}

const containerStyle = {
    border:"solid 1px",
    overflow:"hidden",
    padding:"10px",
    width:"100%",
    minWidth:"300px",
    maxWidth:"450px",
    margin:"20px auto",
    height:"170px"
}

const imageStyle = {
    width:"30%",
    height:"100%",
}

const textStyle = {
    // border:"solid 1px",
    fontSize:"1em",
    paddingLeft:"20px",
    width:"70%",
    display:"inline-block",
    position:"relative",
    bottom:"90px",

}

Listing.propTypes = {

}

export default Listing

