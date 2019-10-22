import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem';
import PaginationBar from './PaginationBar';

function SearchList(props) {
    let listings = props.listings;
    return (
        <div id="results">
            {listings.length === 0 ?
                <p style={countStyleNF}>No Results Found</p>
             :
                <p style={countStyle}>Showing {listings.length} results</p>
            }
            {listings.map((listing,i)=>(
                <ResultItem 
                    index={i}
                    data={listing}
                    setActiveListing={props.setActiveListing}
                />
            ))}
            {/* <PaginationBar currentPage="1" /> */}
        </div>
    )
}

const countStyle = {
    marginTop:"20px",
    textAlign:"center",
    color:"#D3424E"
}

const countStyleNF = {
    ...countStyle,
    marginTop:"50px"
}

SearchList.propTypes = {

}

export default SearchList

