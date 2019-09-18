import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class  Steps extends Component {
    state = {
        data:{
            number:"",
            title:"",
            iconA:"",
            iconB:"",
            desc:""
        }
    }
    componentWillReceiveProps(data){
        this.setState({...data});
    }
    render(){
        return (
            <div style={wrapperStyle}>
                <h3 style={titleStyle}>Step {this.state.data.number}:{' '}{this.state.data.title} </h3>
                <div style={iconContainerStyle}>
                    <i style={iconStyle} className={this.state.data.iconA}></i>
                    <i style={iconStyle} className={this.state.data.iconB}></i>
                </div>
                <p style={descriptionStyle}>{this.state.data.description}</p>
            </div>
        )
    }
}

const wrapperStyle = {
    width:"80%",
    margin:"30px auto",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.2)",
    padding:"20px",
    borderRadius:"5px"
}

const titleStyle = {
    textAlign:"center",
    color:"#555",
}

const iconContainerStyle = {
    textAlign:"center",
    margin:"30px auto"
}

const iconStyle = {
    fontSize:"3.5em",
    margin:"15px 25px",
    color:"#C52184"
}

const descriptionStyle = {
    // width:"90%",
    // textAlign:"justify",
    // textJustify:"distribute",
    // wordSpacing:"-2px",
    margin:"auto",
    textAlign:"center",
    fontSize:"1em",
    height:"130px",
    lineHeight:"1.1em"
}

Steps.propTypes = {

}

export default Steps

