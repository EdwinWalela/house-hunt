import React , { Component } from 'react'
import PropTypes from 'prop-types'

// F3A712 - Tangerine
// 29335C - Purple

class Beds extends Component {
    state = {
        beds:1
    }

    onIncrease = () =>{
        this.setState({
            beds:this.state.beds < 4 ? this.state.beds+1 : this.state.beds 
        })
    }

    onDecrease = () =>{
        this.setState({
            beds:this.state.beds > 1 ? this.state.beds-1 : this.state.beds
        })
    }

    onNextClick = () =>{
        this.props.updateSearchParams({
            target:{name:"beds",value:this.state.beds}
        })
        this.props.setActiveItemIndex(2)
    }



    render(){
        return (
            <div style={containerStyle}>
                <p style={titleStyle}>Bedrooms</p>
                <div style={counterContainer}>
                    <span 
                        className="beds-btn"
                        style={decrementStyle}
                        onClick={this.onDecrease}
                    >
                        -
                    </span>
                    <span className="bed-count" style={numberStyle}>
                        {this.state.beds}
                    </span>
                    <span 
                        className="beds-btn"
                        style={incrementStyle}
                        onClick={this.onIncrease}
                    >
                        +
                    </span>
                </div>
                <button onClick={this.onNextClick} style={buttonStyle}>Next</button>
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
    height:"180px",
    textAlign:"center"
}

const titleStyle = {
    fontWeight:"500",
    color:"#29335C",
    letterSpacing:"1.2px",
}

const counterContainer = {
    margin:"0px auto",
    padding:"0px",
    width:"80%",
}

const spanStyle = {
    display:"inline-block",
    padding:"2px 5px 5px 5px",
    width:"20%",
    height:"40px",
    fontSize:"1.5em",
    fontWeight:"600",
    color:"#fff"
}

const numberStyle = {
    ...spanStyle,
    width:"55%",
    fontWeight:"400",
    color:"#333",
    fontSize:"1.7em"
}

const decrementStyle = {
    ...spanStyle,
    background:"#333",
}

const incrementStyle = {
    ...spanStyle,
    background:"#355691",
}

const buttonStyle = {
    display:"block",
    padding:"8px 10px",
    margin:"14px auto",
    border:"none",
    width:"80%",
    background:"#D3424E",
    color:"#fff"
}

Beds.propTypes = {

}

export default Beds

