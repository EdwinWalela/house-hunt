import React from 'react'
import {NavLink} from 'react-router-dom';
import Listing from './Listing';

function Container(props) {
    return (
        <div style={containerStyle}>
           {props.listings.map((data,i)=>(
               <Listing data={data} index={i} listingOnClick={props.listingOnClick}/>
           ))}
           <div style={paginationWrapperStyle}>
               <NavLink to="/admin"><span style={numberStyle}>1</span></NavLink>
               <span style={numberStyle}>2</span>
               <span style={numberStyle}>3</span>
               <span style={numberStyle}>4</span>
               <span style={numberStyle}>5</span>
               <span style={numberStyle}>6</span>
               <span style={numberStyle}>7</span>
               <span style={numberStyle}>8</span>
               <span style={numberStyle}>9</span>
           </div>
        </div>
    )
}


const containerStyle = {
    margin:"100px auto",
    width:"100%",
    maxWidth:"700px"
}

const paginationWrapperStyle = {
    margin:"50px auto",
    maxWidth:"400px",
    textAlign:"center",
}

const numberStyle = {
    margin:"5px",
}

export default Container;