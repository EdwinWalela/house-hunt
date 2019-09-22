import React from 'react'
import { Link } from 'react-router-dom';


function PaginationBar(props) {
    let active = props.currentPage;
    return (
        <div style={containerStyle}>
            <ul>
                <Link to ="#"><li style={active === '1' ? activeStyle : itemStyle}>1</li></Link>
                <Link to ="#"><li style={active === '2' ? activeStyle : itemStyle}>2</li></Link>
                <Link to ="#"><li style={active === '3' ? activeStyle : itemStyle}>3</li></Link>
                <Link to ="#"><li style={active === '4' ? activeStyle : itemStyle}>4</li></Link>
            </ul>
        </div>
    )
}

const containerStyle = {
    padding:"5px",
    textAlign:"center",
}

const itemStyle = {
    margin:"5px 10px",
    padding:"3px",
    color:"#fff"
}

const activeStyle = {
    ...itemStyle,
    borderBottom:"solid 1px",
}


export default PaginationBar;