import React, { Component } from 'react'

class Form extends Component {
    state = {
        query:"",
        ignore:"",
        condition:"",
        sort:""
    }

    handleQueryChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFormSubmit= (e)=>{
        e.preventDefault();
    }

    handleSearchSubmit= () =>{
        this.props.handleSearchSubmit(this.state.query,this.state.ignore,this.state.vendor,this.state.condition,this.state.sort);
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSearchSubmit} style={formStyle}>
                    <input name="query" onChange={this.handleQueryChange} style={inputStyle} type="text" placeholder="Search for a product"/>
                    <i onClick={this.handleSearchSubmit} style={searchStyle} className="fas fa-search"></i>
                    
                    <div style={advancedSearch}>
                        <small>Advanced Search</small><br/>
                        <input onChange={this.handleQueryChange} name="ignore" style={ignoreStyle} placeholder="Words to ignore eg. Cases,Covers"/>{" "}
                        <br/>
                        <select style={selectStyle} onChange={this.handleQueryChange} name="vendor">
                            <option selected value="all">All Vendors</option>
                            <option value="jumia">Jumia</option>
                            <option value="kilimall">Kilimall</option>
                            <option value="pigiame">Pigiame</option>
                        </select>{" "}
                        <select style={selectStyle} onChange={this.handleQueryChange} name="condition">
                            <option selected value="all">Condition</option>
                            <option value="all">All</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>{" "}
                        <select style={selectStyle} onChange={this.handleQueryChange} name="sort">
                            <option selected value="default">Sort</option>
                            <option value="asc">Price ^</option>
                            <option value="desc">Price v</option>
                        </select>{" "}
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

const formStyle = {
    display:"block",
    margin:"auto",
    width:"90%",
    maxWidth:"500px",
    paddingLeft:"20px"
}

const ignoreStyle = {
    fontSize:"0.8em",
    width:"80%",
    margin:"10px 0",
    maxWidth:"300px",
    padding:"5px",
    textTransform:"capitalize"
}

const selectStyle = {
    padding:"5px"
}

const inputStyle = {
    padding:"5px",
    fontSize:"1em",
    width:"80%"
}

const searchStyle = {
    border:"solid 1px",
    display:"inline-block",
    padding:"9px",
    width:"20%",
    margin:"auto",
    maxWidth:"50px",
    textAlign:"center",
    color:"#fff",
    background:"#ED254E"
}

const advancedSearch = {
    background:"",
    margin:"10px 0",
    padding:"5px"
}

export default Form;