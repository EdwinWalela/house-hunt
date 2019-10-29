import React,{Component} from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Axios from 'axios'

import Landing from './Pages/Index/Landing';
import SearchContainer from './Pages/Search/SearchContainer';
import ListingView from './Pages/ListingView/Container';
import {crawlerBaseAPI} from './config';

import './App.css';

class App extends Component {
    state = {
        listings:[],
        loading:false,
        networkError:false,
        activeListing:{}
    }

    updateSearchParams = (e) =>{
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
        
    }

    listingSearch = async()=>{
        let beds = this.state.beds;
        let location = this.state.location;
        let reff = this.state.refference || "CBD"
        let gyms = this.state.gyms
        let shopping = true
        let medical = this.state.medical
        let restaurants = this.state.restaurants
        // Enter Loading State
        this.setState({
            loading:true
        })
        let res;
        let listings = [];
        // Fetch Data
        try{
            res = await Axios.get(`${crawlerBaseAPI}/listings?beds=${beds}&location=${location}&reff=${reff} &gyms=${gyms}&medical=${medical}&restaurants=${restaurants}&shopping=${shopping}
            `);
            listings = res.data.results
            console.log(listings)
        }catch(err){
            this.setState({
                listings,
                loading:!this.state.loading,
                networkError:true,
            })
            return;
        } 
        this.setState({
            listings,
            loading:!this.state.loading
        })
    }

    setActiveListing = (index) =>{
        this.setState({
            activeListing:this.state.listings[index]
        })
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Route exact path= "/" render={()=>
                        <Landing
                            listingSearch={this.listingSearch}
                            updateSearchParams={this.updateSearchParams}
                        />
                    }/>
                    <Route path= "/search" render={()=>
                        <SearchContainer
                            isLoading={this.state.loading}
                            location={this.state.location}
                            beds={this.state.beds}
                            budget={this.state.price}
                            updateSearchParams={this.updateSearchParams}
                            listingSearch={this.listingSearch}
                            listings={this.state.listings}
                            setActiveListing={this.setActiveListing}
                        />
                    }/>
                    <Route path="/view" render={()=>
                        <ListingView 
                            listing={this.state.activeListing}
                            reffPoint={this.state.reffPoint}
                        />
                    }/>
                </Router>
            </div>
        )
    }
}

export default App;
