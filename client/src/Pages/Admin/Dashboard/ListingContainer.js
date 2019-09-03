import React from 'react'
import Listing from './Listing';

function Container() {
    return (
        <div style={containerStyle}>
           <Listing />
           <Listing />
           <Listing />
           <Listing />
           <Listing />
           <Listing />
           <div style={paginationWrapperStyle}>
               <span style={numberStyle}>1</span>
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