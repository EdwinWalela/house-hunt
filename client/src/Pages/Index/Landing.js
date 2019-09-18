import React, { Component } from 'react'

import Header from '../../layout/Header';
import SearchForm from './SearchBar';
import RangeSelector from './RangeSelector';
import About from './About';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="House Hunt" />
                <div style={containerStyle}>
                    <SearchForm />
                    <RangeSelector />
                </div>
                <About />
            </div>
        )
    }
}


const containerStyle = {
    margin:"60px auto 25px auto",
    backgroundColor:"#1B98E0",
    padding:"10px 0 50px 0",
}

export default Landing;