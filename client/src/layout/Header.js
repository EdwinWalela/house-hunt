import React from 'react'
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <nav style={navStyle}>
            <img style={logoStyle} src="/images/big.png"/>
            <h1 style={titleStyle}>{props.title}</h1>
            <div style={navListStyle}>
                <ul>
                    <Link to="#"><li className="nav-item" style={listItemStyle}>Login</li></Link>
                    {/* <li className="nav-item" style={listItemStyle}>Users</li>
                    <li className="nav-item" style={listItemStyle}>Logout</li> */}
                    {/* <li style={listItemStyle}>(Edwin)</li> */}
                </ul>
            </div>
        </nav>
    )
}

const logoStyle = {
    position:"relative",
    top:"5px",
    margin:"auto 5px",
    width:"30px",
    height:"30px"
}

const navStyle = {
    borderBottom:"solid 3px #fff",
    padding:"15px",
    background:"#1B98E0"
}

const titleStyle = {
    display:"inline-block",
    marginTop:"5px",
    fontSize:"1em",
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
