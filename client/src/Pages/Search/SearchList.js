import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';

function SearchList(props) {
    return (
        <div>
            <p style={countStyle}>Showing 5 of 23 results</p>
            <ResultItem best="1"/>
            <ResultItem />
            <ResultItem />
            <ResultItem />
            <ResultItem />
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

