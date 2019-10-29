import React,{ Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import Axios from 'axios'
import { analyticsBaseAPI } from '../../config'

// Components
import Loading from './Loading'

class ElectricityAnalyrics extends Component{

    state = {
        data:{},
        location:this.props.location,
        loading:true,
        areas:[]
    }

    generateRandom = () =>{
        let min = 0;
        let max = 19;

        return Math.floor(Math.random()* ( max - min + 1)) + min;
    }

    async componentDidMount(){
        let res = await Axios.get(`${analyticsBaseAPI}/tweets/analytics`);
        let activeRes = await Axios.get(`${analyticsBaseAPI}/tweets/analytics/${this.state.location}`)

        let areas = res.data.areas
        this.setState({
            areas
        })
        let activeArea = activeRes.data.areas[0];
        let activeLocation = Object.keys(activeArea)[0]
        
        let activeHits = activeArea[activeLocation];

        this.setState({
            activeArea,
            activeHits
        })

        let labels = areas.map((k,v)=>{
            return Object.keys(k)[0]
        })
        let hits = areas.map((k,v)=>{
            return Object.values(k)[0]
        })

        let min = this.generateRandom()

        labels = labels.splice(min,4)
        hits = hits.splice(min,4)

        const data = {
            labels: [
                this.state.location,
                ...labels
            ],

            datasets: [{
                data: [activeHits,...hits],
                backgroundColor: [
                '#FF6384',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                ]
            }]
        };
        this.setState({
            data,
            loading:!this.state.loading
        })
    }

    refreshAreas = () =>{
        let labels = this.state.areas.map((k,v)=>{
            return Object.keys(k)[0]
        })
        let hits = this.state.areas.map((k,v)=>{
            return Object.values(k)[0]
        })

        let min = this.generateRandom()

        labels = labels.splice(min,4)
        hits = hits.splice(min,4)

        const data = {
            labels: [
                this.state.location,
                ...labels
            ],

            datasets: [{
                data: [this.state.activeHits,...hits],
                backgroundColor: [
                '#FF6384',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                ]
            }]
        };
        this.setState({
            data,
        })
    }

    render(){
        return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>{this.props.location} Power Outage Comparison  <i style={refreshBtnStyle} onClick={this.refreshAreas} className="fas fa-sync"></i></h1>
           
            {this.state.loading ? 
                <Loading/>
            :
                <React.Fragment>  
                    <Doughnut
                        data={this.state.data} 
                        height={60}
                        width={100}
                    />
                    <p style={infoStyle}>Number of power outage reports via Twitter from 1/1/19 to 26/10/19</p>
                </React.Fragment>  
            }
        </div>
        );
    }
}

const containerStyle = {
    margin:"20px",
    width:"80%",
    maxWidth:"600px",
    minHeight:"241px",
    display:"inline-block",
    verticalAlign:"top",
    padding:"5px",
    borderRadius:"5px",
    boxShadow:"0px 5px 5px rgba(0,0,0,0.3)",
}

const titleStyle = {
    fontSize:"1em",
    textTransform:"capitalize"
}

const refreshBtnStyle ={
    marginLeft:"20px",
    marginTop:"5px",
}

const infoStyle = {
    fontSize:"0.7em",
    margin:"10px auto",
    color:"rgba(0,0,0,0.5)"
}

export default ElectricityAnalyrics