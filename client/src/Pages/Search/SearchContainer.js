import React from 'react'
import PropTypes from 'prop-types'

// Components
import SearchList from './SearchList'
import SearchBar from './SearchBar/Container'
import HelpModal from '../../layout/HelpModal'
import LoadingScreen from './Loading'

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
                {props.isLoading ? 
                    <LoadingScreen />
                :
                    <SearchList 
                        listings={props.listings}
                        setActiveListing={props.setActiveListing}
                    />
                }
                <HelpModal 
                    src="https://cdn.dribbble.com/users/261567/screenshots/1372220/map2.gif"
                    desc="We will aggregate your areas of interest and use them to rank your results"
                />
            </div>
        </React.Fragment>
    )
}

const containerStyle = {
    background:"#fff",
    backgroundPosition:"center",
    backgroundRepeat:"none",
    backgroundSize:"cover",
    minHeight:"800px",
}

SearchContainer.propTypes = {

}
export default SearchContainer

