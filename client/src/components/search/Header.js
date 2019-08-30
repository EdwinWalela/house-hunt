import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import Form from './Form';

function Header(props) {
    return (
        <div>
             <NavLink to="/"><h1 style={titleStyle}>InfoBuy.<span style={{color:"#E84855"}}>ke</span></h1></NavLink>
             <Form handleSearchSubmit={props.handleSearchSubmit}/>
        </div>
    )
}

const titleStyle = {
    textAlign:"center",
    fontSize:"1.3em",
    padding:"15px",
    margin:"20px auto",
    color:"#2364AA",
}

Header.propTypes = {

}

export default Header

