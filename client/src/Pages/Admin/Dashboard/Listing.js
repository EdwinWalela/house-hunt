import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListingDetails from './ListingDetails';

function Listing(props) {
    return (
        <Link to="admin/edit">
            <div style={containerStyle}>
                <img style={imageStyle} src="https://picsum.photos/200" />
                <p style={textStyle}>Newly Built 3 Bedroom Penthouse on Riverside Drive with balcony in Nairobi</p>
                <ListingDetails />
            </div>
        </Link>
    )
}

const containerStyle = {
    borderBottom:"solid 1px #7FC29B",
    overflow:"hidden",
    padding:"10px 15px",
    width:"100%",
    minWidth:"300px",
    maxWidth:"650px",
    margin:"20px auto",
    height:"170px"
}

const imageStyle = {
    width:"30%",
    maxWidth:"150px",
    height:"90%",
}

const textStyle = {
    // border:"solid 1px",
    fontSize:"1em",
    paddingRight:"0",
    paddingLeft:"20px",
    width:"70%",
    display:"inline-block",
    position:"relative",
    bottom:"80px",

}

Listing.propTypes = {

}

export default Listing

