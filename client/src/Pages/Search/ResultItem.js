import React from 'react'
import PropTypes from 'prop-types'
import ResultDetails from './ResultDetails';

function ResultItem(props) {
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={" "} />
            <p style={textStyle}> commodi quam debitis? Qui consequatur deleniti placeat esse illum aut </p>
            <ResultDetails />
            {props.best == "1" ? <div style={bestMatchStyle}>Best Match</div>: ''}
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
    margin:"30px auto",
    borderRadius:"5px",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

const imageStyle = {
    width:"30%",
    maxWidth:"150px",
    height:"85%",
    maxHeight:"100px",
}

const textStyle = {
    textTransform:"capitalize",
    fontSize:"0.9em",
    paddingRight:"0",
    paddingLeft:"20px",
    width:"70%",
    display:"inline-block",

}

ResultItem.propTypes = {

}

export default ResultItem

