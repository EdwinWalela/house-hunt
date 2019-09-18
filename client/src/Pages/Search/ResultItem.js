import React from 'react'
import PropTypes from 'prop-types'
import ResultDetails from './ResultDetails';

function ResultItem(props) {
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={"https://picsum.photos/200/300"} />
            <p style={textStyle}> 1 bedroom for sale located in langata rapta road 4400 sq ft 1 master ensuite in a secured compound. </p>
            <ResultDetails />
            {props.best == "1" ?
             <div style={bestMatchStyle}>Best Match <i class="fas fa-star"></i></div>
             : ''}
        </div>
    )
}

const bestMatchStyle = {
    borderRadius:"5px",
    padding:"10px",
    textAlign:"center",
    background:"#2D936C",
    color:"#fff",
    border:"solid 1px",
}

const containerStyle = {
    overflow:"hidden",
    padding:"15px",
    width:"90%",
    background:"#fff",
    margin:"20px auto",
    borderRadius:"5px",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

const imageStyle = {
    width:"100%",
    height:"150px",
    borderRadius:"5px",
}

const textStyle = {
    textTransform:"capitalize",
    fontSize:"0.9em",
    margin:"10px auto",
    width:"99%",

}

ResultItem.propTypes = {

}

export default ResultItem

