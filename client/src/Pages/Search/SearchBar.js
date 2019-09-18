import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div style={formStyle}>
                <input style={inputStyle} type="text" placeholder="1 bedroom langata" />
                <button className="search-btn" style={btnStyle}><i class="fas fa-search"></i></button>
            </div>
        )
    }
}

const inputStyle = {
    padding:"10px",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"inline-block",
    margin:"auto",
    border:"none",
    width:"60%",
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
    padding:"30px 10px",
    backgroundColor:"#1B98E0",
    textAlign:"center",
    margin:"60px auto 0 auto",
    height:"100px",
    width:"100%",
    maxWidth:"400px",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

export default SearchBar