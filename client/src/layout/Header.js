import React from 'react'
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <nav style={navStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
            <div style={navListStyle}>
                <ul>
                    <Link to="/admin"><li className="nav-item" style={listItemStyle}>Listings</li></Link>
                    {/* <li className="nav-item" style={listItemStyle}>Users</li>
                    <li className="nav-item" style={listItemStyle}>Logout</li> */}
                    {/* <li style={listItemStyle}>(Edwin)</li> */}
                </ul>
            </div>
        </nav>
    )
}

const navStyle = {
    borderBottom:"solid 3px #fff",
    padding:"15px",
    background:"#1B98E0"
}

const titleStyle = {
    display:"inline",
    fontSize:"0.9em",
    color:"#fff"
}

const navListStyle = {
    float:"right",
    display:"inline",
    textAlign:"center",
}

const listItemStyle = {
    margin:"5px 10px",
    color:"#fff"
}
