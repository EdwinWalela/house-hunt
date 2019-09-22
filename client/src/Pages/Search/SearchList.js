import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';
import PaginationBar from './PaginationBar';

function SearchList(props) {
    let listings = props.listings;
    return (
        <div id="results">
            <p style={countStyle}>Showing {listings.length} of {listings.length} results</p>
            {listings.map(listing=>(
                <ResultItem data={listing}/>
            ))}
            <PaginationBar currentPage="1" />
        </div>
    )
}

const countStyle = {
    textAlign:"center",
    color:"#fff"
}

SearchList.propTypes = {

}

export default SearchList

