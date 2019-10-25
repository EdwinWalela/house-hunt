import React,{ Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import Axios from 'axios'
import { analyticsBaseAPI } from '../../config'

class ElectricityAnalyrics extends Component{

    state = {

    }

    componentDidMount(){
        let res = axios.get(`${analyticsBaseAPI}/tweets/analytics`);
        console.log(res.data);
        const data = {
            labels: [
                'Red',
                'Green',
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
    }

    render(){
        return (
        <div>
            <h2>Doughnut Example</h2>
            <Doughnut data={data} />
        </div>
        );
    }
}

export default ElectricityAnalyrics