import React from 'react'
import PropTypes from 'prop-types'

function AreaCards(props) {
    let areas = props.areas
    return (
        <div style={containerStyle}>
            {areas.map(area=>(
                 <div style={cardStyle}>
                    <p style={textStyle}>{area.name}</p>
                    <p style={openedBadge}>Opened</p>
                    {/* <p style={catStyle}>Shopping Center<i class="fas fa-shopping-cart"></i></p> */}
                </div>
            ))}
        </div>
    )
}

const containerStyle = {
}

const openedBadge = {
    background:"green",
    color:"#fff",
    fontSize:"0.6em",
    borderRadius:"5px",
    // padding:"5px 0",
    margin:"5px auto",
    width:"70%"
}

const textStyle = {
    fontSize:"0.7em",
    margin:"0",
    textTransform:"capitalize"
}

const catStyle = {
    fontSize:"0.6em",
    margin:"0"
}

const cardStyle = {
    display:"inline-block",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.2)",
    width:"25%",
    padding:"10px 0",
    borderRadius:"5px",
    margin:"0 5px",

}

AreaCards.propTypes = {

}

export default AreaCards

