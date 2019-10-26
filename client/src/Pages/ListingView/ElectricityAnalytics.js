import React,{ Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import Axios from 'axios'
import { analyticsBaseAPI } from '../../config'

class ElectricityAnalyrics extends Component{

    state = {
        data:{},
        location:this.props.location
    }

    componentDidMount(){
        let res = Axios.get(`${analyticsBaseAPI}/tweets/analytics`);
        console.log(res.data);
        const data = {
            labels: [
                'Red',
                this.state.location,
                'Yellow',
                'Red',
                this.state.location,
                'Yellow'
            ],

            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        this.setState({data})
    }

    render(){
        return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Power Outage Analysis</h1>
            <Doughnut data={this.state.data} />
        </div>
        );
    }
}

const containerStyle = {
    margin:"20px",
    width:"80%",
    maxWidth:"400px",
    minHeight:"241px",
    display:"inline-block",
    verticalAlign:"top",
    padding:"10px",
    borderRadius:"5px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
}

const titleStyle = {
    fontSize:"1.2em"
}

export default ElectricityAnalyrics