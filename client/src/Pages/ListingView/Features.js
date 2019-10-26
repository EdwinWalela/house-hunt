import React from 'react'
import PropTypes from 'prop-types'

function Features(props) {
    let listing = props.listing
    let price = props.listing.price || 0;
    return (
        <div style={containerStyle}>
            <div style={featureContainer}>
                <h1 style={titleStyle}>Features</h1>
                <div style={featureGroupStyle}>
                    <i style={bedIcon} class="fas fa-bed"></i>
                    <p style={featureTextStyle}>{listing.beds} Bedroom</p>
                </div>
                <div style={featureGroupStyle}>
                    <i style={locationIcon} class="fas fa-map-marker-alt"></i> 
                    <p style={featureTextStyle}>{listing.location},Nairobi</p>
                </div>
                <div style={featureGroupStyle}>
                    <i style={priceIcon} class="fas fa-money-bill-wave"></i>
                    <p style={featureTextStyle}>KES {price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

const containerStyle = {
    width:"80%",
    margin:"20px",
    maxWidth:"400px",
    display:"inline-block"
}

const titleStyle = {
    fontSize:"1.3em"
}

const featureContainer = {
    padding:"10px",
    borderRadius:"5px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
    minHeight:"241px",
}

const featureTextStyle = {
    display:"inline-block",
    paddingLeft:"0px",
    textAlign:"center",
    width:"70%",
    textTransform:"capitalize"
}

const featureGroupStyle = {
    margin:"10px auto",
    borderBottom:"solid 1px rgba(0,0,0,0.2)",
}

const bedIcon = {
    color:"rgb(73, 48, 107)",
}

const locationIcon = {
    color:"#F3A712",
}


const priceIcon = {
    color:"rgb(45, 147, 108)",
}

Features.propTypes = {

}

export default Features

