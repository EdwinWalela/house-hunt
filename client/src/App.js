import React,{Component} from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import Axios from 'axios'

import AdminContainer from './Pages/Admin/Dashboard/Container';
import EditContainer from './Pages/Admin/Edit/EditContainer';
import Header from './layout/Header';

import './App.css';

class App extends Component {
    state = {
        listings:[],
        activeListing:{}
    }

    async componentDidMount(){
        let listings = await Axios.get('http://192.168.0.29:8080/api/listings');
        listings = listings.data.results
        this.setState({
            listings
        })
    }

    listingOnClick = (i) =>{
        this.setState({
            activeListing:this.state.listings[i]
        })
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
                        />
                    }/>
                    <Route path="/admin/edit" render={()=>
                        <EditContainer listing={this.state.activeListing}/>
                    }/>
                </Router>
            </div>
        )
    }
}

export default App;
