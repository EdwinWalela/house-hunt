import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';

function SearchList(props) {
    return (
        <div>
            <ResultItem best="1"/>
            <ResultItem />
            <ResultItem />
        </div>
    )
}


SearchList.propTypes = {

}

export default SearchList

