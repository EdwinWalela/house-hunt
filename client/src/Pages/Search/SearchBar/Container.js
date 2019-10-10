import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import InputBar from './InputBar'
import InterestBar from './InterestBar'

class Container extends PureComponent {
    render() {
        return (
            <div style={containerStyle}>
                <InputBar />
                <InterestBar />
            </div>
        )
    }
}

const containerStyle = {
    padding:"10px 5px 0 5px",
    background:"#fff"
}

export default Container