import React,{Component} from 'react';
// import Router from 'react-router-dom';
import AdminContainer from './Pages/Admin/Dashboard/Container';
import EditContainer from './Pages/Admin/Edit/EditContainer';
import Header from './layout/Header';

import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Header />
                <EditContainer />
            </div>
        )
    }
}

export default App;
