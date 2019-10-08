import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../layout/Header';
import SearchBar from './SearchCont';
import SearchList from './SearchList';

function SearchContainer(props) {
    return (
        <React.Fragment>
            <div style={containerStyle}>
                <SearchList 
                    listings={props.listings}
                />
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    padding:"10px 10px",
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

