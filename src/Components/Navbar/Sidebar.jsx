import React from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom'

function Sidebar(){
    return (
        <div className="Sidebar">
            <h3>Admin Dashboard</h3>
                <ul className="sidebar-menu">
                    <li><Link to="/admindashboard" style={{textDecoration:'none',color:'white'}} className="bi bi-speedometer2">    Dashboard</Link></li>
                    <li><Link to="/addproduct" style={{textDecoration:'none',color:'white'}} className="bi bi-box-seam">    Products</Link></li>
                    <li><Link to="/" style={{textDecoration:'none',color:'white'}} i className="bi bi-cart">    Orders</Link></li>
                    <li><Link to="/customers" style={{textDecoration:'none',color:'white'}} className="bi bi-people">    Customers</Link></li>
                    <li><Link to="/addproduct" style={{textDecoration:'none',color:'white'}} className="bi bi-gear">    Settings</Link></li>
                    <li><Link to="/" style={{textDecoration:'none',color:'white'}} className="bi bi-box-arrow-right">    Logout</Link></li>
                </ul>
        </div>

    )
}

export default Sidebar;