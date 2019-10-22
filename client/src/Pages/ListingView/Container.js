import React from 'react'
import PropTypes from 'prop-types'

// Components
import NavSearch from './SearchBar/Container'
import Features from './Features'

function Container(props) {
    let listing = props.listing
    return (
        <div style={containerStyle}>
            <NavSearch />
            <Features />
        </div>
    )
}


const containerStyle = {
    margin:"auto 0",
    textAlign:"center",
}

Container.propTypes = {

}

export default Container

