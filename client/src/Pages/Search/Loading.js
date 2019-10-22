import React from 'react'
import PropTypes from 'prop-types'

function Loading(props) {
    return (
        <div style={containerStyle}>
            <i style={spinnerStyle} className="fas fa-spinner"></i>
        </div>
    )
}

const containerStyle = {
    textAlign:"center",
    padding:"50px 0",
   
}

const spinnerStyle = {
    color:"#D3424E",
    fontSize:"2em",
}

Loading.propTypes = {

}

export default Loading

