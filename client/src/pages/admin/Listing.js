import React from 'react'
import PropTypes from 'prop-types'
import ListingDetails from './ListingDetails';

function Listing(props) {
    return (
        <div>
            <img src="https://picsum.photos/200" />
            <h1 style={textStyle}>Newly Built 3 Bedroom Penthouse on Riverside Drive,Nairobi</h1>
            <ListingDetails />
        </div>
    )
}

const imageStyle = {
    
}

const textStyle = {

}

Listing.propTypes = {

}

export default Listing

