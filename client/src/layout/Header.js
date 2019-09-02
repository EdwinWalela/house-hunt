import React from 'react'

export default function Header() {
    return (
        <nav style={navStyle}>
            <h1 style={titleStyle}>Admin Dashboard</h1>
            <div style={navListStyle}>
                <ul>
                    <li style={listItemStyle}>Listings</li>
                    <li style={listItemStyle}>Listings</li>
                    <li style={listItemStyle}>Listings</li>
                    <li style={listItemStyle}>Listings</li>
                </ul>
            </div>
        </nav>
    )
}

const navStyle = {
    border:"solid 1px",
    padding:"15px",
}

const titleStyle = {
    display:"inline",
}

const navListStyle = {
    float:"right",
    display:"inline",
    textAlign:"center",
}

const listItemStyle = {
    margin:"5px 10px"
}
