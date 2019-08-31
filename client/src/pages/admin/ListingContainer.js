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
    margin:"50px auto",
}


export default Container;