import React from 'react'
import PropTypes from 'prop-types'

const iconStyle = (active) => {
    let style = {
        fontSize:"1.5em",
        borderRadius:"5px",
        padding:"10px 20px",
        margin:"5px 5px",
        color:"#fff",
    }
    if(active){
        return {
            ...style,
            background:"#D3424E"
        }
    }else{
        return {
           ...style,
        }
    }
}

function StepNavigator(props) {
    return (
        <div className="search-nav" style={wrapperStyle}>
            <i 
                onClick={props.updateActiveStep.bind(this,0)}
                style={iconStyle(props.active == 0 ? true : false)}
                className="fas fa-map-marker-alt">
            </i>
            <i 
                onClick={props.updateActiveStep.bind(this,1)}
                style={iconStyle(props.active == 1 ? true : false)}
                className="fas fa-bed">
            </i>
            <i 
                onClick={props.updateActiveStep.bind(this,2)}
                style={iconStyle(props.active == 2 ? true : false)}
                className="fas fa-tag"></i>
            <i
                onClick={props.updateActiveStep.bind(this,3)}
                style={iconStyle(props.active == 3 ? true : false)}
                className="fas fa-briefcase">
            </i>
        </div>
    )
}

const wrapperStyle = {
    textAlign:"center",
    padding:"0px",
    width:"90%",
    margin:"-5px auto 0 auto"
}

StepNavigator.propTypes = {

}

export default StepNavigator

