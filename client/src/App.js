import React,{Component} from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Axios from 'axios'

import Landing from './Pages/Index/Landing';
import SearchContainer from './Pages/Search/SearchContainer';

import './App.css';

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
            res = await Axios.get('http://192.168.0.29:8000/api/listings');
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
                    <Route exact path= "/" render={()=><Landing/>}/>
                    <Route path= "/search" render={()=>
                        <SearchContainer />
                    }/>
                </Router>
            </div>
        )
    }
}

export default App;
