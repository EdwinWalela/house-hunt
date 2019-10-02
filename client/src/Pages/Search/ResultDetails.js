import React from 'react'
import PropTypes from 'prop-types'

function ResultDetails(props) {
    let data = props.data
    return (
        <div style={DetailsContainerStyle}>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-bed"></i>
                <p style={DetailTextStyle}>{data.beds}</p>
            </div>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-bath"></i>
                <p style={DetailTextStyle}>{data.baths}</p>
            </div>
            {/* <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-map-marker-alt"></i>
                <p style={DetailTextStyle}>Langata</p>
            </div> */}
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-shopping-cart"></i>
                <p style={DetailTextStyle}>n/a</p>
            </div>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-road"></i>
                <p style={DetailTextStyle}>n/a</p>
            </div>
         </div>
    )
}

const DetailsContainerStyle = {
    margin:"5px",
    width:"60%",
    display:"inline-block"
}

const DetailItemStyle = {
    display:"inline-block",
    margin:"0px",
    width:"24%",
    fontSize:"0.9em",
    textAlign:"center"
}

const iconStyle = {
    display:"block",
    width:"80px",
    height:"100%",
    color:"#fff",
    textAlignc:"center",
    padding:"5px",
    marginRight:"0px",
    background:"#1B98E0"
}

const DetailTextStyle = {
    background:"#272932",
    color:"#fff",
    padding:"30px auto",
    textAlign:"center",
    height:"100%",
    fontWeight:"500",
    width:"80px",
    display:"block",
    fontSize:"1em",
    // textTransform:"capitalize"
}

ResultDetails.propTypes = {

}

export default ResultDetails

