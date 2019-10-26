import React from 'react'
import PropTypes from 'prop-types'

// Components
import NavSearch from './SearchBar/Container'
import Features from './Features'
import Commute from './Commute'
import Neighborhood from './Neighborhood'
import ElecAnalytics from './ElectricityAnalytics'

function Container(props) {
    let listing = props.listing
    let location = listing.location || "Langata"
    return (
        <div style={containerStyle}>
            <NavSearch />
            <img style={imageStyle} src={listing.thumb} />
            <br/>
            <Features 
                listing={listing}
            />
            <ElecAnalytics 
                location={location}
            />
            {/* <Commute     
            /> */}
            {/* <Neighborhood
                shops={listing.places.shops}
            /> */}
        </div>
    )
}

const containerStyle = {
    margin:"auto 0",
    textAlign:"center",
}

const imageStyle = {
    width:"150px",
    height:"150px",
    margin:"20px auto 30px auto"
}


Container.propTypes = {

}

export default Container

