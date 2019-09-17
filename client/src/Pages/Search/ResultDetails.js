import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';

function ResultDetails(props) {
    return (
        <div style={DetailsContainerStyle}>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-bed"></i>
                <p style={DetailTextStyle}>2</p>
            </div>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-bath"></i>
                <p style={DetailTextStyle}>2</p>
            </div>
            <div style={DetailItemStyle}>
                <i style={iconStyle} class="fas fa-map-marker-alt"></i>
                <p style={DetailTextStyle}>Langata</p>
            </div>
         </div>
    )
}

const DetailsContainerStyle = {
    textAlign:"center",
    padding:"10px",
    marginLeft:"31.5%",
}

const DetailItemStyle = {
    display:"inline-block",
    fontSize:"0.9em",
    margin:"10px 2px",
    textAlign:"center"
}

const iconStyle = {
    color:"#fff",
    padding:"10px 12px",
    borderRadius:"50%",
    marginBottom:"10px",
    background:"#1B98E0"
}

const DetailTextStyle = {
    fontSize:"1em",
    textTransform:"capitalize"
}

ResultDetails.propTypes = {

}

export default ResultDetails

