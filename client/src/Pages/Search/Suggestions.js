import React from 'react'
import PropTypes from 'prop-types'
import SuggestionItem from './SuggestionItem'

function Suggestions(props) {
    let listings = props.listings
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Suggestions</h1>
            {listings.map(listing=>(
                <SuggestionItem listing={listing}/>
            ))}
        </div>
    )
}

const containerStyle = {
    padding:"15px",
    width:"100%",
    textAlign:"center",
    background:"#E6E6EA",
}

const titleStyle = {
    padding:"5px",
    fontSize:"1.2em",
    color:"rgba(0,0,0,0.75)"
}

Suggestions.propTypes = {

}

export default Suggestions

