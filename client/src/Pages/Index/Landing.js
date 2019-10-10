import React, { Component } from 'react'

// Components
import InteractiveSearch from './InteractiveSearch/Container';
import InfoModal from '../../layout/HelpModal';

class Landing extends Component {
    render() {
        return (
            <div>
                {/* <Header title="House Hunt" /> */}
                    <InteractiveSearch
                        listingSearch={this.props.listingSearch}
                        updateSearchParams={this.props.updateSearchParams}
                    />
                <InfoModal 
                    src="/images/traffic.gif"
                    description="We will show you how far the commute is to the places you got to the most"
                />
            </div>
        )
    }
}




export default Landing;