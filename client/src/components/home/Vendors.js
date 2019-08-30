import React from 'react'
import PropTypes from 'prop-types'

function Vendors(props) {
    return (
        <div>
            <h1 style={titleStyle}>Vendors we support</h1>
            <center>
                <a href="https://www.jumia.co.ke/" target="_blank"><img style={vendorImgStyle} src="/images/jumia.png"/></a>
                <a href="https://www.kilimall.co.ke/" target="_blank"><img style={vendorImgStyle} src="/images/kilimall.png"/></a>
                <a href="https://www.pigiame.co.ke/" target="_blank"><img style={vendorImgStyle} src="/images/pigiame.png"/></a>
            </center>
        </div>
    )
}

const titleStyle = {
    textAlign:"center",
    margin:"100px auto 50px auto",
    padding:"5px",
    color:"#403F4C"
}

const vendorImgStyle = {
    height:"80px",
    width:"30%",
    maxWidth:"150px"
}

Vendors.propTypes = {

}

export default Vendors

