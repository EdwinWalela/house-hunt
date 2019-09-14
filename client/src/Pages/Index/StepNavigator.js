import React from 'react'
import PropTypes from 'prop-types'

const iconStyle = (active) => {
    let style = {
        fontSize:"1.5em",
        borderRadius:"5px",
        padding:"10px 20px",
        margin:"5px 5px"
    }
    if(active){
        return {
            ...style,
            color:"#fff",
            background:"#1B98E0"
        }
    }else{
        return {
           ...style,
        }
    }
}

function StepNavigator(props) {
    return (
        <div style={wrapperStyle}>
            <i onClick={props.updateActiveStep.bind(this,0)} style={iconStyle(props.active == 0 ? true : false)} className="far fa-user"></i>
            <i onClick={props.updateActiveStep.bind(this,1)} style={iconStyle(props.active == 1 ? true : false)} className="far fa-heart"></i>
            <i onClick={props.updateActiveStep.bind(this,2)} style={iconStyle(props.active == 2 ? true : false)} className="fas fa-search"></i>
            <i onClick={props.updateActiveStep.bind(this,3)} style={iconStyle(props.active == 3 ? true : false)} className="fas fa-sort-amount-down"></i>
        </div>
    )
}

const wrapperStyle = {
    textAlign:"center",
    padding:"0px",
    width:"90%",
    margin:"15px  auto"
}

StepNavigator.propTypes = {

}

export default StepNavigator

