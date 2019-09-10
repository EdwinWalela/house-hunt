import React, { Component } from 'react'

import Header from '../../layout/Header';
import RangeSelector from './RangeSelector';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="Home" />
                <div style={containerStyle}>
                    <RangeSelector />
                </div>
            </div>
        )
    }
}

const containerStyle = {
    margin:"150px auto"
}


export default Landing;