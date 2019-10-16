import React from 'react'
import PropTypes from 'prop-types'

// Components
import SearchList from './SearchList'
import SearchBar from './SearchBar/Container'
import HelpModal from '../../layout/HelpModal'

function SearchContainer(props) {
    return (
        <React.Fragment>
            <div style={containerStyle}>
                <SearchBar
                    location={props.location}
                    beds={props.beds}
                    budget={props.budget}
                    updateSearchParams={props.updateSearchParams}
                    listingSearch={props.listingSearch}
                />
                <SearchList 
                    listings={props.listings}
                />
                <HelpModal 
                    src=""
                    desc=""
                />
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    background:"url('/images/landing5.jpg')",
    backgroundPosition:"center",
    backgroundRepeat:"none",
    backgroundSize:"cover",
    minHeight:"800px",
}

SearchContainer.propTypes = {

}

export default SearchContainer

