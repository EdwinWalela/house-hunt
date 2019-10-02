import React, { Component } from 'react';
import Axios from 'axios';
import { geolocated } from 'react-geolocated';
import baseAPI from '../config';

import SearchFormGroup from './SearchFormGroup';
import CoordsInput from './CoordsReffrence';

class SearchBar extends Component {

    state = {
        locations:[],
    }

    handleInputChange=(e)=>{
        this.props.updateSearchParams(e);
    }

    async componentDidMount(){
        let res = await Axios.get(`${baseAPI}/locations`);
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
                <SearchFormGroup
                     locations={locations}
                     type="location"
                     handleInputChange={this.props.updateSearchParams}
                />
                 <SearchFormGroup
                     type="beds"
                     handleInputChange={this.props.updateSearchParams}
                />
                <CoordsInput
                     type="reffrence"
                     handleInputChange={this.props.updateSearchParams}
                />
                {/* <SearchFormGroup type="reffrence"/> */}
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

export default geolocated({
    positionOptions:{
        enableHighAccuracy:true,
    },
    userDecisionTimeout:5000,
})(SearchBar)