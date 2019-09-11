import React, { Component } from 'react'

class EditForm extends Component {

    state = {
        id:this.props.listing.id,
        title:this.props.listing.title,
        price:this.props.listing.price,
        location:this.props.listing.location,
        beds:this.props.listing.beds,
        baths:this.props.listing.baths
    }

    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        let updatedListing = {
            id:this.props.listing._id,
            title:this.state.title,
            price:this.state.price,
            location:this.state.location,
            beds:this.state.beds,
            baths:this.state.baths,
        }
        // Send updated listing to App.js
        this.props.updateListing(updatedListing)

    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} style={formStyle}>
                <h1 style={headingStyle}>Edit Listing</h1>
                <textarea name="title" onChange={this.handleInputChange} rows='5' style={inputStyle} type="text" placeholder="Title" value={this.state.title}/>
                <input name="price" onChange={this.handleInputChange}  style={inputStyle} type="text" placeholder="Price" value={this.state.price}/>
                <input name="location" onChange={this.handleInputChange}  style={inputStyle} type="text" placeholder="Location" value={this.state.location}/>
                <label for="beds">Beds</label>
                <input name="beds" onChange={this.handleInputChange}  id="beds" style={counterStyle} type="number" value={this.state.beds}/>
                <label for="baths">Baths</label>
                <input name="baths" onChange={this.handleInputChange} id="baths" style={counterStyle} type="number" value={this.state.baths}/>
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