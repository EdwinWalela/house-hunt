import React , { Component } from 'react'
import PropTypes from 'prop-types'

// F3A712 - Tangerine
// 29335C - Purple

class Budget extends Component {
    state = {
        price:5000
    }

    onIncrease = () =>{
        this.setState({
            price:(Number(this.state.price)+5000)
        })
    }

    onDecrease = () =>{
        this.setState({
            price:(Number(this.state.price)-5000)
        })
    }

    handlePriceChange = (e) =>{
        this.setState({
            [e.target.name]:Number(e.target.value)
        })
    }

    onNextClick = () =>{
        this.props.setActiveItemIndex(3);
        this.props.updateSearchParams({
            target:{name:"price",value:this.state.price}
        })
    }
  

    render(){
        return (
            <div style={containerStyle}>
                <p style={titleStyle}>What's Your Budget?</p>
                <div style={counterContainer}>
                    <span 
                        className="beds-btn"
                        style={decrementStyle}
                        // onClick={this.onDecrease}
                        onTouchStart={this.onDecrease}
                    >
                        -
                    </span>
                    <input 
                        type="number"
                        name="price"
                        className="bed-count" 
                        style={numberStyle}
                        value={this.state.price}
                        onChange={this.handlePriceChange}
                    />
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
    fontSize:"1.5em",
    textAlign:"center",
    padding:"6px",
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


Budget.propTypes = {

}

export default Budget

