import React,{Component} from 'react';
// import Router from 'react-router-dom';
import AdminContainer from './Pages/Admin/Dashboard/Container';
import EditContainer from './Pages/Admin/Edit/EditContainer';

import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <EditContainer />
            </div>
        )
    }
}

export default App;
