import React from 'react'
import PropTypes from 'prop-types'
import ResultDetails from './ResultDetails';

function ResultItem(props) {
    let data = props.data;
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={data.thumb} />
            <ResultDetails data={data}/>
            <p style={textStyle}> {data.title}.</p>
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
    padding:"5px",
    width:"100%",
    background:"#fff",
    margin:"20px auto",
    borderRadius:"5px",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

const imageStyle = {
    width:"100px",
    height:"100px",
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

