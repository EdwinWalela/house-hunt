import React from 'react'
import PropTypes from 'prop-types'

function Product(props) {
    let image = "/images/";
    let product = props.product
    return (
        <a target="_blank" href={product.url}>
            <div style={productStyle}>
                <img alt="" style={imageStyle} src={product.thumb}/>
                <hr/>
                <p style={nameStyle}>{product.name.substr(0,20)}...</p>
                <h4 style={priceStyle}>{product.price ? "KES "+product.price : ""}</h4>
                <img  alt="" style={vendorBanner} src={`${image}${product.source}.png`}/>
            </div>
        </a>
    )
}

const productStyle = {
    display:"inline-block",
    border:"solid 1px rgba(0,0,0,0.1)",
    width:"90%",
    maxWidth:"150px",
    margin:"5px",
    padding:"10px 20px",
    textAlign:"left"
}

const imageStyle = {
    width:"90%",
    height:"100px",
    margin:"10px auto",
    display:"block",
}

const nameStyle = {
    fontSize:"0.8em",
    padding:"10px 0"
}

const priceStyle = {
    fontSize:"0.9em",
    color:"#333"
}

const vendorBanner = {
    position:"relative",
    right:"10px",
    width:"80px",
    height:"50px"
}

Product.propTypes = {

}

export default Product

