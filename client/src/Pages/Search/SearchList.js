import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';
import PaginationBar from './PaginationBar';

function SearchList(props) {
    return (
        <div id="results">
            <p style={countStyle}>Showing 5 of 23 results</p>
            <ResultItem best="1"/>
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
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

