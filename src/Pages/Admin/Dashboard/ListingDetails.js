import React from 'react'
import PropTypes from 'prop-types'

function ListingDetails(props) {
    return (
        <div style={DetailsContainerStyle}>
            <div style={DetailItemStyle}>
                <i class="fas fa-bed"></i>
                <p style={DetailTextStyle}>{props.data.beds}</p>
            </div>
            <div style={DetailItemStyle}>
                <i class="fas fa-bath"></i>
                <p style={DetailTextStyle}>{props.data.baths}</p>
            </div>
            <div style={DetailItemStyle}>
                <i class="fas fa-map-marker-alt"></i>
                <p style={DetailTextStyle}>{props.data.location}</p>
            </div>
            {/* <img src="./images/jumia.png" style={sourceStyle}/> */}
        </div>
    )
}

const DetailsContainerStyle = {
    // border:"solid 1px",
    padding:"10px",
    position:"relative",
    bottom:"50px",
    marginLeft:"31.5%",
}

const DetailItemStyle = {
    display:"inline-block",
    margin:"10px",
    textAlign:"center"
}

const DetailTextStyle = {
    fontSize:"0.7em",
    textTransform:"capitalize"
}

ListingDetails.propTypes = {

}

export default ListingDetails

