import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchContainer(props) {
    return (
        <div style={containerStyle}>
            {/* <SearchForm
                updateSearchParams={props.updateSearchParams}  ----- (Pass To New Search)
            />
            <RangeSelector /> */}
            {/* <Link to="/search"><button onClick={props.listingSearch} style={btnStyle}>Search</button></Link> */}
        </div>
    )
}

const containerStyle = {
    margin:"60px auto 25px auto",
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

