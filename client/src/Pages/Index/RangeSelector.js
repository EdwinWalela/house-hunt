import React, { Component } from 'react'
import { Range } from 'react-range';


const colors = ['#F79D84','#978897','#9CBCF8']


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
                                backgroundColor:isDragged ? colors[index] : 'grey'
                            }
                        }
                    />
                    )}
                />
                <div style={statsStyle}>
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
                    <span style={valueStyle}>{this.state.values[2]*25} meters away</span>
                </div>
                </div>        
            </div>
        )
    }
}

const statsStyle = {
    margin:"30px auto",
}

const barlabelStyle = {
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
    padding:"10px 0",
    margin:"15px auto",
    backgroundColor:"#fff"
}

const valueStyle ={
    paddingRight:"20px",
    float:'right',
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
    padding:"11px 5px",
    color:"#fff"
    // float:"left",
}

const priceLabelStyle = {
    ...labelStyle,
    backgroundColor:"#F79D84"

}
const trafficLabelStyle = {
    ...labelStyle,
    backgroundColor:"#978897"
}
const ShoppingCentersStyle = {
    ...labelStyle,
    backgroundColor:"#9CBCF8"
}


const containerStyle = {
    width:"300px",
    margin:"auto" 
}

const trackStyle = {
    height: '30px',
    width: '80%',
    margin:"auto",
    backgroundColor: '#fff'
}

const  thumbStyle = {
    height: '30px',
    width: '30px',
    borderRadius: '4px',
    backgroundColor: '#7FC29B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export default  RangeSelector;