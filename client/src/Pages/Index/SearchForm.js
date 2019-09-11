import React, { Component } from 'react'

class SearchForm extends Component {
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
    width:"80%",
}

const btnStyle = {
    display:"inline-block",
    width:"20%",
    fontSize:"1.1em",
    padding:"11px",
    border:"none",
}

const formStyle = {
    textAlign:"center",
    margin:"30px auto",
    width:"80%",
    maxWidth:"400px",
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
}

export default SearchForm