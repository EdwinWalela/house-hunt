import React, { Component } from 'react'

// Components
import Header from '../../layout/Header';
import InteractiveSearch from './InteractiveSearch/Container';
import About from './About';
import HelpModal from './HelpModal';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="House Hunt" />
                <InteractiveSearch
                    listingSearch={this.props.listingSearch}
                    updateSearchParams={this.props.updateSearchParams}
                />
                <About />
                <HelpModal />
            </div>
        )
    }
}

export default Landing;