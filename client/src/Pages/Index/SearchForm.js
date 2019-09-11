import React, { Component } from 'react'

class SearchForm extends Component {
    render() {
        return (
            <div>
                  <input style={inputStyle} type="text" placeholder="1 bedroom langata" />
            </div>
        )
    }
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

export default SearchForm