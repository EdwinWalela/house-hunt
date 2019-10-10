import React from 'react'
import PropTypes from 'prop-types'

// Components
import SearchList from './SearchList';
import SearchBar from './SearchBar/Container'

function SearchContainer(props) {
    return (
        <React.Fragment>
            <div style={containerStyle}>
                <SearchBar />
                <SearchList 
                    listings={props.listings}
                />
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    background:"url('/images/landing5.jpg')",
    background:"url(/images/landing5.jpg)",
    backgroundPosition:"center",
    backgroundRepeat:"none",
    backgroundSize:"cover",
    minHeight:"800px",
}

SearchContainer.propTypes = {

}

export default SearchContainer

