import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ListingDetails from './ListingDetails';

function Listing(props) {
    let title = props.data.title;
    return (
        <Link to="admin/edit">
            <div style={containerStyle} onClick={props.listingOnClick.bind(this,props.index)}>
                <img style={imageStyle} src={props.data.thumb} />
                <p style={textStyle}>{title.length > 100 ? title.substr(0,60) : title}</p>
                <ListingDetails data={props.data}/>
            </div>
        </Link>
    )
}

const containerStyle = {
    borderBottom:"solid 1px #7FC29B",
    overflow:"hidden",
    padding:"0px 15px",
    width:"100%",
    minWidth:"300px",
    maxWidth:"650px",
    margin:"20px auto",
    height:"100px",
    // border:"solid 1px"
}

const imageStyle = {
    width:"30%",
    maxWidth:"150px",
    height:"85%",
}

const textStyle = {
    // border:"solid 1px",
    textTransform:"capitalize",
    fontSize:"0.9em",
    paddingRight:"0",
    paddingLeft:"20px",
    width:"70%",
    display:"inline-block",
    position:"relative",
    bottom:"50px",

}

Listing.propTypes = {

}

export default Listing

