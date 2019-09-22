import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SearchForm from '../../layout/SearchBar'
import RangeSelector from '../../layout/RangeSelector'


function SearchContainer(props) {
    return (
        <div style={containerStyle}>
            <SearchForm />
            <RangeSelector />
            <Link to="/search#results"><button style={btnStyle}>Search</button></Link>
        </div>
    )
}

const containerStyle = {
    margin:"60px auto 0px auto",
    backgroundColor:"#1B98E0",
    padding:"10px 0 50px 0",
}

const btnStyle = {
    display:"block",
    width:"80%",
    margin:"50px auto 20px auto",
    fontSize:"1.1em",
    padding:"10.5px",
    border:"none",
    backgroundColor:"#49306B",
    color:"#fff",
}

SearchContainer.propTypes = {

}

export default SearchContainer

