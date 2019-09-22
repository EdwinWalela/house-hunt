import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class SearchBar extends Component {

    state = {
        locations:[],
    }

    handleInputChange=(e)=>{
        this.props.updateSearchParams(e);
    }

    async componentDidMount(){
        let res = await Axios.get('http://192.168.0.29:8000/api/locations');
        console.log(res.data.locations);
        this.setState({
            locations:res.data.locations
        })
    }

    render() {
        let locations = this.state.locations || [];
        return (
            <div style={formStyle}>
                <h1 style={sloganStyle}>Find Your Next Home.</h1>
                <div style={formGroup}>
                    <label style={labelStyle}>Location</label>
                    <select name="location" style={selectStyle} type="text" placeholder="Any" onChange={this.handleInputChange}>
                        <option value="any">Anywhere</option>
                        {locations.map(location=>(
                            <option value={location.area}>{location.area}</option>
                        ))}
                    </select>
                </div>
                <div style={formGroup}>
                    <label style={labelStyle}>Beds</label>
                    <input name="beds" style={inputStyle} type="text" placeholder="2"  onChange={this.handleInputChange}/>
                </div>
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

const selectStyle = {
    textTranform:"capitalize",
    padding:"13px",
    backgroundColor:"#fff",
    fontSize:"1.2em",
    letterSpacing:"1px",
    display:"inline-block",
    margin:"-1px auto",
    border:"none",
    borderRight:"solid 1px #1B98E0",
    width:"100%",
    textAlign:"center",
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