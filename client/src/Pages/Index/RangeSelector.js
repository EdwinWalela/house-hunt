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
                    renderThumb={({ props,isDragged,index }) => (
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
                <div style={priceBarStyle}>
                    <span style={priceLabelStyle}>Price</span>
                    <span style={valueStyle}>0 to Ksh.{this.state.values[0]*1000} </span>
                </div>
                <div style={trafficBarStyle}>
                    <span style={trafficLabelStyle}>Estimate Traffic</span>
                    <span style={valueStyle}>{this.state.values[1]} mins</span>
                </div>
                <div style={shoppingCentersBarStyle}>
                    <span style={ShoppingCentersStyle}>Shopping Centers</span> 
                    <span style={valueStyle}>{this.state.values[2]*25-750} meters away</span>
                </div>
            </div>
        )
    }
}


const barlabelStyle = {
    border:"solid 1px",
    padding:"10px 0",
    margin:"10px auto",
}

const valueStyle ={
    paddingRight:"20px",
    position:"relative",
    bottom:"2px",
    float:'right',
    fontSize:"1.4em"
}

const priceBarStyle = {
    ...barlabelStyle,
}

const trafficBarStyle = {
    ...barlabelStyle,
}

const shoppingCentersBarStyle = {
    ...barlabelStyle,
}

const labelStyle = {
    border:"solid 1px",
    padding:"10px",
    // float:"left",
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
