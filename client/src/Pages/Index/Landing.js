import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../layout/Header';
import SearchContainer from './SearchContainer';
import About from './About';
import HelpModal from './HelpModal';


class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="House Hunt" />
                <SearchContainer />
                <About />
                <HelpModal />
            </div>
        )
    }
}

export default Landing;