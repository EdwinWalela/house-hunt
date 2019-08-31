import React,{Component} from 'react';
import AdminContainer from './pages/admin/Container';
import './App.css';

class App extends Component {
    render(){
        return (
            <div className="App">
                <AdminContainer />
            </div>
        )
    }
}

export default App;
