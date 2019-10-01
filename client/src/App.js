import React,{Component} from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Axios from 'axios'

import Landing from './Pages/Index/Landing';
import SearchContainer from './Pages/Search/SearchContainer';

import './App.css';

class App extends Component {
    state = {
        listings:[],
        loading:false,
        networkError:false,
    }

    updateSearchParams = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    listingSearch = async()=>{
        let beds = this.state.beds;
        let location = this.state.location;
        // Enter Loading State
        this.setState({
            loading:true
        })
        let res;
        let listings = [];
        // Fetch Data
        try{
            res = await Axios.get(`http://localhost:8000/api/listings?beds=${beds}&location=${location}`);
            listings = res.data.results
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
                            updateSearchParams={this.updateSearchParams}
                            listingSearch={this.listingSearch}
                            listings={this.state.listings}
                        />
                    }/>
                </Router>
            </div>
        )
    }
}

export default App;
