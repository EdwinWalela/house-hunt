import React from 'react'
import PropTypes from 'prop-types'

function SuggestionItem(props) {
    let listing = props.listing
    return (
        <div style={containerStyle}>
            <img style={imgStyle} src={listing.thumb[0]}/>
            <p style={textStyle}>{listing.location}</p>
            <p style={textStyle}>Ksh.{listing.price.toLocaleString()}</p>
        </div>
    )
}

const containerStyle = {
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
    background:"#fff",
    padding:"10px",
    display:"inline-block",
    width:"130px",
    margin:"10px 0px",
    textAlign:"center"
}

const textStyle = {
    fontSize:"0.8em",
    margin:"10px 0",
    textTransform:"capitalize"
}

const imgStyle = {
    width:"90%",
    height:"100px",
}

SuggestionItem.propTypes = {

}

export default SuggestionItem

