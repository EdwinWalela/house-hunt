import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import ResultDetails from './ResultDetails';

function ResultItem(props) {
    let data = props.data;
    let index = props.index;
    return (
        <NavLink to="/view">
            <div style={containerStyle} onClick={props.setActiveListing.bind(this,index)}>
                <img style={imageStyle} src={data.thumb[0]} />
                <ResultDetails data={data}/>
                <p style={textStyle}> {data.title.toLowerCase()}.</p>
                {props.best == "1" ?
                <div style={bestMatchStyle}>Best Match <i class="fas fa-star"></i></div>
                : ''}
            </div>
        </NavLink>
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
    width:"95%",
    maxWidth:"450px",
    background:"#fff",
    margin:"5px auto",
    textAlign:"center",
    borderBottom:"solid 3px #2D936C"
}

const imageStyle = {
    width:"100px",
    height:"100px",
    verticalAlign:"middle",
    borderRadius:"5px",
}

const textStyle = {
    textTransform:"capitalize",
    fontSize:"0.9em",
    margin:"5px auto",
    width:"99%",
    textAlign:"left"

}

ResultItem.propTypes = {

}

export default ResultItem

