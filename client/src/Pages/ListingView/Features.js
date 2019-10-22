import React from 'react'
import PropTypes from 'prop-types'

function Features(props) {
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={"https://picsum.photos/300/300?random=2"} />
            <div>
                <h1 style={titleStyle}>Features</h1>
                <div style={featureContainer}>
                    <div style={featureGroupStyle}>
                        <i style={bedIcon} class="fas fa-bed"></i>
                        <p style={featureTextStyle}>3 bedroom</p>
                    </div>
                    <div style={featureGroupStyle}>
                        <i style={locationIcon} class="fas fa-map-marker-alt"></i> 
                        <p style={featureTextStyle}>Langata,Nairobi</p>
                    </div>
                    <div style={featureGroupStyle}>
                        <i style={priceIcon} class="fas fa-money-bill-wave"></i>
                        <p style={featureTextStyle}>KES 30,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const containerStyle = {
    width:"80%",
    margin:"20px auto",
    maxWidth:"500px",
}

const imageStyle = {
    width:"150px",
    height:"150px",
    margin:"20px 0 30px 0"
}

const titleStyle = {
    fontSize:"1.3em"
}

const featureContainer = {
    padding:"10px",
    borderRadius:"5px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",

}

const featureTextStyle = {
    display:"inline-block",
    paddingLeft:"0px",
    textAlign:"center",
    width:"70%",
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

