import React , { Component } from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value,locations) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : locations.filter(loc =>
    loc.area.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.area;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div style={suggestionContainerStyle}>
    <p style={suggestionStyle}>{suggestion.area}</p>
  </div>
);


class Location extends Component {
    state = {
        value:'',
        locations:[],
        suggestions:["langata","lavington"]
    }

    componentWillReceiveProps(locations){
        this.setState({
            locations:locations.locations
        })
    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value,this.state.locations)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render(){
        const { value, suggestions } = this.state;
        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Start typing ...',
          value,
          onChange: this.onChange,
          style:inputStyle
        };

        return (
            <div style={containerStyle}>
                <p style={titleStyle}>Choose a Location</p>
                {/* <i style={iconStyle} className="fas fa-map-marker-alt location-icon"></i> */}
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                {/* <input className="search-input" style={inputStyle} type="text" placeholder="Start typing ..."/> */}
                {/* <button style={buttonStyle}>Next</button> */}
                
            </div>
        )
    }
}

const containerStyle = {
    background:"rgba(255,255,255,1)",
    borderRadius:"5px",
    padding:"20px",
    margin:"10px auto",
    width:"90%",
    maxWidth:"400px",
    height:"150px",
    textAlign:"center",
    // overFlow:"auto"
}

const titleStyle = {
    fontWeight:"500",
    color:"#29335C",
    letterSpacing:"1.2px",
}

const suggestionContainerStyle = {
    borderBottom:"solid 1px rgba(0,0,0,0)",
    paddding:"10px",
    display:"block",
    background:"#fff",
    width:"210px",
    fontSize:"1.2em",
    letterSpacing:"1.3px",
    textTransform:"capitalize"
}

const suggestionStyle = {
    display:"block"
}

const iconStyle = {
    position:"relative",
    display:"inline",
    right:"36%",
    top:"20px",
    color:"#F3A712",
}

const inputStyle = {
    display:"block",
    margin:"0px auto 20px auto",
    border:"none",
    borderBottom:"solid 2px #D3424E",
    background:"transparent",
    padding:"5px",
    width:"80%",
    fontSize:"1.1em",
    letterSpacing:"1.3px",
    textTransform:"capitalize",
    textAlign:"center"
}

Location.propTypes = {

}


// F3A712 - Tangerine
// 29335C - Purple


export default Location

