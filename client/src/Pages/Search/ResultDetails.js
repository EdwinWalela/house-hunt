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
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-shopping-cart"></i>
                <p style={DetailTextStyle}>n/a</p>
            </div>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-road"></i>
                <p style={DetailTextStyle}>{data.metric.duration}</p>
            </div>
            <p style={priceStyle}><i class="fas fa-tag"></i> Ksh.{data.price}</p>
            
            <p style={locationStyle}><i class="fas fa-map-marker-alt"></i> {data.location}</p>
         </div>
    )
}

const metaStyle = {
    width:"50%",
    padding:"5px",
    textTransform:"capitalize",
    margin:"5px auto",
    display:"inline-block",
    textAlign:"center",
    fontSize:"0.8em"
}

const priceStyle = {
    ...metaStyle,
    fontWeight:"600"
}

const locationStyle = { 
    ...metaStyle,
}

const DetailsContainerStyle = {
    textAlign:"center",
    margin:"10px 5px 5px 5px",
    verticalAlign:"middle",
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
    width:"50px",
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
    width:"50px",
    display:"block",
    fontSize:"0.8em",
    // textTransform:"capitalize"
}

ResultDetails.propTypes = {

}

export default ResultDetails

