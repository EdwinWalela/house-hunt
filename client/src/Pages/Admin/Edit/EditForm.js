import React, { Component } from 'react'

class EditForm extends Component {
    render() {
        let listing = this.props.listing
        return (
            <form style={formStyle}>
                <h1 style={headingStyle}>Edit Listing</h1>
                <textarea rows='5' style={inputStyle} type="text" placeholder="Title" value={listing.title}/>
                <input style={inputStyle} type="text" placeholder="Price" value={listing.price}/>
                <input style={inputStyle} type="text" placeholder="Location" value={listing.location}/>
                <label for="beds">Beds</label>
                <input id="beds" style={counterStyle} type="number" value={listing.beds}/>
                <label for="baths">Baths</label>
                <input id="baths" style={counterStyle} type="number" value={listing.baths}/>
                <input style={submitBtnStyle} type="submit" value="Update"/>
            </form>
        )
    }
}

const headingStyle = {
    fontSize:"1.3em",
    color:"#7FC29B",
    margin:"10px auto",
}

const formStyle= {
    boxShadow:"1px 1px 10px rgba(0,0,0,.2)",
    margin:"100px auto 50px auto",
    width:"90%",
    maxWidth:"400px",
    padding:"30px 10px",
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
    border:"none",
    background:"#7FC29B",
    color:"#fff",
    fontSize:"0.95em",
}

export default EditForm