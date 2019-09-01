import React, { Component } from 'react'

class EditForm extends Component {
    render() {
        return (
            <form style={formStyle}>
                <h1 style={headingStyle}>Edit Listing</h1>
                <input style={inputStyle} type="text" placeholder="Title" />
                <input style={inputStyle} type="text" placeholder="Price" />
                <input style={inputStyle} type="text" placeholder="Location" />
                <label for="beds">Beds</label>
                <input id="beds" style={counterStyle} type="number" />
                <label for="baths">Baths</label>
                <input id="baths" style={counterStyle} type="number" />
                <input style={submitBtnStyle} type="submit" value="Update"/>
            </form>
        )
    }
}

const headingStyle = {
    fontSize:"1.3em",
    margin:"10px auto",
}

const formStyle= {
    border:"solid 1px",
    margin:"50px auto",
    width:"90%",
    maxWidth:"400px",
    padding:"15px",
    textAlign:"center"
}

const counterStyle = {
    display:"inline-block",
    width:"15%",
    padding:"5px",
    fontSize:"1em",
    margin:"15px 10px"
}

const inputStyle = {
    display:"block",
    margin:"20px auto",
    width:"80%",
    fontSize:"1em",
    padding:"5px"
}

const submitBtnStyle = {
    width:"80%",
    padding:"10px 5px",
    marginTop:"15px",
}

export default EditForm