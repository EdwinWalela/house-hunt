import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Product from './Product';

class ResultsContainer extends Component {
    
    state = {
        products:[]
    }

    componentWillReceiveProps(next){
        this.setState({
            products:next.products
        })
    }

    render(){
        return (
            <div style={containerStyle}>
            {!this.props.loading ? 
                <React.Fragment>{
                        this.state.products.map(product=>(
                            <Product product={product}/>
                        ))
                    }
                </React.Fragment>
                 : <p>Fetching results <i class="fas fa-spinner"></i></p>}
                
            </div>
        )
    }
}

const metaStyle = {
    fontSize:"0.8em",
    color:"#333",
    padding:"10px"
}

const containerStyle = {
    width:"100%",
    margin:"30px auto 50px auto",
    textAlign:"center"
}

ResultsContainer.propTypes = {
    products:PropTypes.array.isRequired
}

export default ResultsContainer

