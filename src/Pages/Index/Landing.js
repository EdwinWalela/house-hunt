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


const containerStyle = {
    margin:"60px auto",
    backgroundColor:"#7FC29B",
    padding:"50px"
}

const inputStyle = {
    padding:"10px",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"block",
    margin:"30px auto",
    border:"none",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

export default Landing;