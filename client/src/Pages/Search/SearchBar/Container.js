import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import InputBar from './InputBar'
import InterestBar from './InterestBar'

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
                <InterestBar 
                     updateSearchParams={this.props.updateSearchParams}
                     listingSearch={this.props.listingSearch}
                />
            </div>
        )
    }
}

const containerStyle = {
    padding:"0",
    background:"#fff",
    
    textAlign:"center"
}

export default Container