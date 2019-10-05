import React , { Component } from 'react'
import { Range } from 'react-range'
import PropTypes from 'prop-types'

// F3A712 - Tangerine
// 29335C - Purple

class Budget extends Component {
    state = {
        values:[50]
    }
    render(){
        return (
            <div style={containerStyle}>
                <p style={titleStyle}>What's Your Budget?</p>
                <p style={priceStyle}>
                    {"KES "+(this.state.values[0]*600).toLocaleString()}
                </p>
                <Range
                    step={1}
                    min={0}
                    max={100}
                    values={this.state.values}
                    onChange={values => this.setState({ values })}
                    allowOverlap={true}
                    renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={trackStyle}
                    >
                        
                        {children}
                    </div>
                    )}
                    renderThumb={({ props,isDragged,index }) => (
                    <div className="slider-thumb"
                        {...props}
                    
                        style={{ 
                                ...props.style,
                                ...thumbStyle,
                                // backgroundColor:colors[index]
                            }
                        }
                    >
                        <i style={sliderTagStyle} className="fas fa-money-bill-wave"></i>
                    </div>
                    )}
                /> 
                <button style={buttonStyle}>Next</button>
            </div>
        )
    }
}

const containerStyle = {
    background:"rgba(255,255,255,1)",
    borderRadius:"5px",
    padding:"20px",
    margin:"20px auto",
    width:"90%",
    maxWidth:"400px",
    height:"200px",
    textAlign:"center"
}

const titleStyle = {
    fontWeight:"500",
    color:"#29335C",
    letterSpacing:"1.2px",
}

const priceStyle = {
    display:"block",
    textAlign:"center",
    fontSize:"1.5em",
    letterSpacing:"1.5px",
    fontWeight:"400",
    color:"#333",
}

const thumbStyle = {
    height: '35px',
    width: '35px',
    borderRadius: '4px',
    backgroundColor: '#F3A712',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const trackStyle = {
    height: '5px',
    width: '80%',
    margin:"auto",
    backgroundColor: 'rgba(0,0,0,0.3)'
}

const sliderTagStyle = {
    color:"#fff"
}

const buttonStyle = {
    display:"block",
    padding:"8px 10px",
    margin:"20px auto",
    border:"none",
    width:"80%",
    background:"#D3424E",
    color:"#fff"
}

Budget.propTypes = {

}

export default Budget

