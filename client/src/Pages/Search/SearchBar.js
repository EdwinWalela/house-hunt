import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    render() {
        return (
            <div style={formStyle}>
                <h1 style={sloganStyle}>Find Your Next Home.</h1>
                <div style={formGroup}>
                    <label style={labelStyle}>Location</label>
                    <input style={inputStyle} type="text" placeholder="Any" />
                </div>
                <div style={formGroup}>
                    <label style={labelStyle}>Beds</label>
                    <input style={inputStyle} type="text" placeholder="2" />
                </div>
                {/* <Link to="/search"><button className="search-btn" style={btnStyle}><i class="fas fa-search"></i></button></Link> */}
            </div>
        )
    }
}

const formGroup = {
    display:"inline-block",
    width:"49%",
}

const labelStyle = {
    color:"#fff",
    display:"block",
    margin:"10px auto",
}

const sloganStyle = {
    fontSize:"1.5em",
    color:"#fff",
    marginBottom:"20px",
}

const inputStyle = {
    padding:"10px",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"inline-block",
    margin:"auto",
    border:"none",
    borderRight:"solid 1px #1B98E0",
    width:"100%",
    textAlign:"center",
}

const formStyle = {
    backgroundColor:"#1B98E0",
    textAlign:"center",
    margin:"30px auto 0 auto",
    width:"90%",
    maxWidth:"400px",
}

export default SearchBar