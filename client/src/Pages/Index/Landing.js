import React, { Component } from 'react'

import Header from '../../layout/Header';
import RangeSelector from './RangeSelector';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="Home" />
                <div style={containerStyle}>
                    <input style={inputStyle} type="text" placeholder="1 bedroom langata" />
                    <RangeSelector />
                </div>
            </div>
        )
    }
}

const colors = [
    
]

const containerStyle = {
    margin:"150px auto"
}

const inputStyle = {
    padding:"10px",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"block",
    margin:"30px auto"
}

export default Landing;