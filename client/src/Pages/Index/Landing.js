import React, { Component } from 'react'

import Header from '../../layout/Header';
import SearchForm from './SearchBar';
import RangeSelector from './RangeSelector';
import About from './About';
import HelpModal from './HelpModal';

class Landing extends Component {
    render() {
        return (
            <div>
                <Header title="House Hunt" />
                <div style={containerStyle}>
                    <SearchForm />
                    <RangeSelector />
                    <button style={btnStyle}>Search</button>
                </div>
                <About />
                <HelpModal />
            </div>
        )
    }
}

const btnStyle = {
    display:"block",
    width:"80%",
    margin:"50px auto 20px auto",
    fontSize:"1.1em",
    padding:"10.5px",
    border:"none",
    backgroundColor:"#49306B",
    color:"#fff",
}


const containerStyle = {
    margin:"60px auto 25px auto",
    backgroundColor:"#1B98E0",
    padding:"10px 0 50px 0",
}

export default Landing;