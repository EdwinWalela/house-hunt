import React, { Component } from 'react'
import { Range } from 'react-range';

class RangeSelector extends Component {
    state = {
        values:[0,50, 100]
    }

    render() {
        return (
            <div style={containerStyle}>
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
                    renderThumb={({ props,isDragged }) => (
                    <div
                        {...props}
                        style={{ 
                            ...props.style,
                            ...thumbStyle,
                            backgroundColor:isDragged ? '#7FC29B' : '#333'
                            }
                        }
                    />
                    )}
                />
                <p style={priceBarStyle}><span style={priceLabelStyle}>Price</span>: 0 to Ksh.{this.state.values[0]*1000} </p>
                <p style={trafficBarStyle}>Estimate Traffic: {this.state.values[1]} minutes</p>
                <p style={ShoppingCentersBarStyle}>Nearest Shopping Centers:  {this.state.values[2]*25-750} meters away</p>
            </div>
        )
    }
}


const labelStyle = {
    border:"solid 1px",
    padding:"10px",
    margin:"10px auto"
}

const priceLabelStyle = {
    ...labelStyle,
}
const trafficLabelStyle = {
    ...labelStyle,
}
const ShoppingCentersStyle = {
    ...labelStyle,
}

const priceBarStyle = {

}

const trafficBarStyle = {

}

const ShoppingCentersBarStyle = {
    
}

const containerStyle = {
    width:"400px",
    margin:"auto"
}

const trackStyle = {
    height: '50px',
    width: '100%',
    backgroundColor: '#ccc'
}

const  thumbStyle = {
    height: '50px',
    width: '42px',
    borderRadius: '4px',
    backgroundColor: '#7FC29B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export default  RangeSelector;
