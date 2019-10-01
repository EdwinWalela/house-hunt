import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../layout/Header';
import SearchBar from './SearchCont';
import SearchList from './SearchList';

function SearchContainer(props) {
    return (
        <React.Fragment>
            <Header title="House Hunt"/>
            <SearchBar 
                listingSearch={props.listingSearch}
                updateSearchParams={props.updateSearchParams}
            />
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
    background:"#1B98E0",
}

SearchContainer.propTypes = {

}

export default SearchContainer

