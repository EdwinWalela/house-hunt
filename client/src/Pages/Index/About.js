import React,{ Component } from 'react'
import Step from './Steps';
import StepNavigator from './StepNavigator';

const steps = [
    {
        number:1,
        iconA:"fas fa-user",
        iconB:"fas fa-road",
        title:"Account Creation",
        description:"We will request your basic contact information as you create your account. We will also require a workplace location. This will enable us to provide you with traffic information as you search for your next home."
    },
    {
        number:2,
        iconA:"fas fa-shopping-cart",
        iconB:"fas fa-dumbbell",
        title:"Interests",
        description:"In order to provide you with the best results, we would request you to provide us with facilites/services you would like to be located nearby your next home."
    },
    {
        number:3,
        iconA:"fas fa-money-bill",
        iconB:"fas fa-bed",
        title:"Search",
        description:"Specify your budget and other personal requirements for example number of rooms/baths."
    },
    {
        number:4,
        iconA:"fas fa-cogs",
        iconB:"fas fa-home",
        title:"Make The Decision",
        description:"Our systems will process your requirements and intelligently provide you with the best results so that you to make the right decision."
    },
]

class About extends Component {
    state = {
        step:0,
    }

    updateActiveStep = (step) =>{
        this.setState({step});
    }

    render(){
        return (
            <div style={containerStyle}>
                <h1 style={sloganStyle}>How It Works.</h1>
                <Step 
                    data={steps[this.state.step]} 
                />
                <StepNavigator
                    updateActiveStep={this.updateActiveStep}
                    active={this.state.step}
                />
            </div>
        )
    }
}

const containerStyle = {
}

const sloganStyle = {
    fontSize:"1.5em",
    color:"#1B98E0",
    margin:"70px auto 10px auto",
    textAlign:"center",
}


export default  About