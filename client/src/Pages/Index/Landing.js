import React, { Component } from 'react'

import Header from '../../layout/Header';
import SearchForm from './SearchForm';
import RangeSelector from './RangeSelector';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="Home" />
                <div style={containerStyle}>
                    <SearchForm />
                    <RangeSelector />
                </div>
            </div>
        )
    }
}


const containerStyle = {
    margin:"60px auto",
    backgroundColor:"#7FC29B",
    padding:"50px 0",
}

export default Landing;