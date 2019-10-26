import React from 'react'
import PropTypes from 'prop-types'

function Loading(props) {
    return (
        <div style={containerStyle}>
            <p style={infoStyle}>Crunching Data {" "}<i style={spinnerStyle} className="fas fa-spinner"></i></p>
        </div>
    )
}

const containerStyle = {
    textAlign:"center",
    padding:"60px 0",
}

const infoStyle = {
    fontSize:"0.8em",
    color:"rgba(0,0,0,0.6)"
}

const spinnerStyle = {
    color:"#D3424E",
    fontSize:"1em",
}

Loading.propTypes = {

}

export default Loading

