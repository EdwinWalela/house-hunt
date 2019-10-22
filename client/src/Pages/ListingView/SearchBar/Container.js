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
    padding:"10px 5px 0 5px",
    background:"#fff",
    border:"solid 1px",
}

export default Container