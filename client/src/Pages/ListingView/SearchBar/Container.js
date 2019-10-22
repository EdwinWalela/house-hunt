import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import InputBar from './InputBar'

class Container extends PureComponent {
    render() {
        return (
            <div style={containerStyle}>
                <InputBar
                    location={this.props.location}
                    beds={this.props.beds}
                    budget={this.props.budget}
                    updateSearchParams={this.props.updateSearchParams}
                />
            </div>
        )
    }
}

const containerStyle = {
    background:"#fff",
}

export default Container