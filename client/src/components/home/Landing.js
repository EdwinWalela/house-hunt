import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import SearchBar from './SearchBar';
import Vendors from './Vendors';

function Landing(props) {
    return (
        <div>
             <NavLink to="/"><h1 style={titleStyle}>InfoBuy.<span style={{color:"#E84855"}}>ke</span></h1></NavLink>
            <p style={sloganStyle}>Compare prices from popular vendors across Africa and the World.</p>
            <SearchBar  
                handleSearchSubmit={props.handleSearchSubmit}
            />
            <Vendors />
        </div>
    )
}

const titleStyle = {
    textAlign:"center",
    letterSpacing:"2px",
    fontSize:"3em",
    padding:"10px",
    margin:"50px auto 0px auto",
    color:"#2364AA"
}

const sloganStyle = {
    textAlign:"center",
    margin:"10px auto 50px auto"
}

Landing.propTypes = {
    handleSearchSubmit:PropTypes.func.isRequired,
    query:PropTypes.string.isRequired
}

export default Landing

