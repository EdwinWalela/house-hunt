import React from 'react'
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <nav style={navStyle}>
            <div style={navListStyle}>
                <ul>
                    <Link to="#">
                        <li style={listItemStyle}>
                            <i class="fas fa-user-alt"></i>
                        </li>
                    </Link>
                    {/* <li className="nav-item" style={listItemStyle}>Users</li>
                    <li className="nav-item" style={listItemStyle}>Logout</li> */}
                    {/* <li style={listItemStyle}>(Edwin)</li> */}
                </ul>
            </div>
        </nav>
    )
}

const navStyle = {
    boxShadow:"0px 2px 2px rgba(0,0,0,0.3)",
    padding:"5px",
    height:"9vh",
    background:"rgba(255,255,255,0.7)"
}

const navListStyle = {
    float:"right",
    display:"inline",
    textAlign:"center",
}

const listItemStyle = {
    margin:"5px 10px",
    color:"#fff",
    fontSize:"1.2em"
}
