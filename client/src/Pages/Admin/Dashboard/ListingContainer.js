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
        </div>
    )
}


const containerStyle = {
    margin:"100px auto",
    width:"90%",
    maxWidth:"450px"
}


export default Container;