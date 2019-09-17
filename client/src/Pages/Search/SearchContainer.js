import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../layout/Header';
import SearchList from './SearchList';

function SearchContainer(props) {
    return (
        <React.Fragment>
            <Header title="House Hunt"/>
            <div style={containerStyle}>
                <SearchList />
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    marginTop:"60px",
    padding:"20px 10px",
    background:"#1B98E0",
}

SearchContainer.propTypes = {

}

export default SearchContainer

