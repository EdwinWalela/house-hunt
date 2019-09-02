import React,{Component} from 'react';
import {BrowserRouter as Router,Route}  from 'react-router-dom';
import AdminContainer from './Pages/Admin/Dashboard/Container';
import EditContainer from './Pages/Admin/Edit/EditContainer';

import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <Route exact path="/admin" render={()=>
                        <AdminContainer />
                    }/>
                    <Route path="/admin/edit" render={()=>
                        <EditContainer />
                    }/>
                </Router>
            </div>
        )
    }
}

export default App;
