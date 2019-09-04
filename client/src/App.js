import React,{Component} from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Axios from 'axios'

import AdminContainer from './Pages/Admin/Dashboard/Container';
import EditContainer from './Pages/Admin/Edit/EditContainer';
import Header from './layout/Header';

import './App.css';


Axios.defaults.baseURL = "http://localhost:8080"

class App extends Component {
    state = {
        listings:[],
        activeListing:{},
        loading:false,
        networkError:false
    }

    async componentDidMount(){
        // Enter Loading State
        this.setState({
            loading:true
        })
        let res;
        let listings = [];
        // Fetch Data
        try{
            res = await Axios.get('/api/listings');
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

    listingOnClick = (i) =>{
        this.setState({
            activeListing:this.state.listings[i]
        })
    }

    updateListing = async (listing) =>{
        let url = `api/listings/${listing.id}`;
        await Axios.post(url,listing)
    }
    
    render(){
        return (
            <div className="App">
                <Router>
                    <Route exact path= "/" render={()=><Header title="Home"/>}/>
                    <Route exact path="/admin" render={()=>
                        <AdminContainer 
                            listings={this.state.listings}
                            listingOnClick={this.listingOnClick} 
                            networkError={this.state.networkError}
                        />
                    }/>
                    <Route path="/admin/edit" render={()=>
                        <EditContainer 
                            listing={this.state.activeListing}
                            updateListing={this.updateListing}
                        />
                    }/>
                </Router>
            </div>
        )
    }
}

export default App;
