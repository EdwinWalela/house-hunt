import React from 'react'
import PropTypes from 'prop-types'

function ResultDetails(props) {
    let data = props.data
    return (
        <div style={DetailsContainerStyle}>
            <p style={priceStyle}><i class="fas fa-tag"></i> Ksh.{data.price}</p>
            <p style={priceStyle}><i class="fas fa-bed"></i> {data.beds} Bedroom</p>
            <p style={locationStyle}><i class="fas fa-map-marker-alt"></i> {data.location}</p>
         </div>
    )
}

const metaStyle = {
    width:"50%",
    padding:"5px",
    textTransform:"capitalize",
    margin:"5px auto",
    textAlign:"left",
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
    float:"right",
    margin:"10px 5px 5px 5px",
    paddingLeft:"10px",
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

