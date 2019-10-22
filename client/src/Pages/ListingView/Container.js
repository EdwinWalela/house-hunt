import React from 'react'
import PropTypes from 'prop-types'

// Components
import NavSearch from './SearchBar/Container'

function Container(props) {
    let listing = props.listing
    return (
        <div>
            <NavSearch />
        </div>
    )
}

Container.propTypes = {

}

export default Container

