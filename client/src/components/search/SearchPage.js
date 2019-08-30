import React from 'react'
import PropTypes from 'prop-types'

import SearchHeader from './Header';
import ResultContainer from './ResultsContainer';

function SearchPage(props) {
    return (
        <div style={wrapperStyle}>
            <SearchHeader handleSearchSubmit={props.handleSearchSubmit}/>
            <ResultContainer 
                products={props.products}
                loading={props.loading}
            />
        </div>
    )
}

const wrapperStyle = {
    minHeight:"80vh"
}
SearchPage.propTypes = {
    products:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

export default SearchPage

