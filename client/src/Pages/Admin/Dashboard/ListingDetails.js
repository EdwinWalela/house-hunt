import React from 'react'
import PropTypes from 'prop-types'

function ListingDetails(props) {
    return (
        <div style={DetailsContainerStyle}>
            <div style={DetailItemStyle}>
                <i class="fas fa-bed"></i>
                <p style={DetailTextStyle}>3</p>
            </div>
            <div style={DetailItemStyle}>
                <i class="fas fa-bath"></i>
                <p style={DetailTextStyle}>3</p>
            </div>
            <div style={DetailItemStyle}>
                <i class="fas fa-map-marker-alt"></i>
                <p style={DetailTextStyle}>Riverside Drive</p>
            </div>
            {/* <img src="./images/jumia.png" style={sourceStyle}/> */}
        </div>
    )
}

const DetailsContainerStyle = {
    padding:"10px",
    position:"relative",
    bottom:"60px",
    width:"70%",
    minWidth:"300px",
    marginLeft:"30.5%"
}

const DetailItemStyle = {
    display:"inline-block",
    margin:"10px",
    textAlign:"center"
}

const DetailTextStyle = {
    fontSize:"0.7em"
}

const sourceStyle = {
    position:"relative",
    bottom:"-15px",
    left:"20px",
    width:"60px",
    height:"40px",
}

ListingDetails.propTypes = {

}

export default ListingDetails

