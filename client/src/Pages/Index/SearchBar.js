import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SearchBar extends Component {
    render() {
        return (
            <div style={formStyle}>
                <h1 style={sloganStyle}>Find Your Next Home.</h1>
                <input style={inputStyle} type="text" placeholder="1 bedroom langata" />
                <Link to="/search"><button className="search-btn" style={btnStyle}><i class="fas fa-search"></i></button></Link>
            </div>
        )
    }
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
    width:"80%",
}

const btnStyle = {
    display:"inline-block",
    width:"20%",
    fontSize:"1.1em",
    padding:"10.5px",
    border:"none",
    backgroundColor:"#fff",
    color:"#14213D",
}

const formStyle = {
    backgroundColor:"#1B98E0",
    textAlign:"center",
    margin:"30px auto 0 auto",
    width:"80%",
    maxWidth:"400px",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

export default SearchBar