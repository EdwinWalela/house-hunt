import React, { Component } from 'react'
import { Range } from 'react-range';


const colors = ['#B8336A','#E2711D','#2D936C']


class RangeSelector extends Component {
    state = {
        values:[0,50, 100]
    }
    
    render() {
        return (
            <div style={containerStyle}>
                <div style={statsStyle}>
                    <div style={priceBarStyle}>
                        <span style={priceLabelStyle}>Price</span>
                        <span style={valueStyle}>Ksh.{this.state.values[0]*500-2500 < 1 ? 0 : this.state.values[0]*500-2500} to Ksh.{this.state.values[0]*500} </span>
                    </div>
                    <div style={trafficBarStyle}>
                        <span style={trafficLabelStyle}>Estimate Traffic</span>
                        <span style={valueStyle}>{this.state.values[1]+15} mins</span>
                    </div>
                    <div style={shoppingCentersBarStyle}>
                        <span style={ShoppingCentersStyle}>Shopping Centers</span> 
                        <span style={valueStyle}>{this.state.values[2]*25+10} meters away</span>
                    </div>
                </div>     
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
                                backgroundColor:colors[index]
                            }
                        }
                    />
                    )}
                />   
            </div>
        )
    }
}

const statsStyle = {
    margin:"30px auto",
}

const barlabelStyle = {
    boxShadow:"0px 10px 5px rgba(0,0,0,0.2)",
    padding:"10px 1px 10px 0",
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
    padding:"11px 15px 11px 5px",
    color:"#fff"
    // float:"left",
}

const priceLabelStyle = {
    ...labelStyle,
    backgroundColor:colors[0]

}
const trafficLabelStyle = {
    ...labelStyle,
    backgroundColor:colors[1]
}
const ShoppingCentersStyle = {
    ...labelStyle,
    backgroundColor:colors[2]
}


const containerStyle = {
    width:"310px",
    margin:"auto" ,
}

const trackStyle = {
    height: '20px',
    width: '80%',
    margin:"auto",
    backgroundColor: '#fff'
}

const  thumbStyle = {
    height: '40px',
    width: '40px',
    borderRadius: '4px',
    backgroundColor: '#7FC29B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export default  RangeSelector;
