import React from "react";
import "./Sidebar.css";

function UserSidebar(){
    return (
        <div className="Sidebar">
            <h3>My Store</h3>
            
            <ul className="sidebar-menu">
                <li><i className="bi bi-speedometer2"></i>Dashboard</li>
                <li><i className="bi bi-box-seam"></i>My Orders</li>
                <li><i className="bi bi-cart"></i>Wishlist</li>
                <li><i className="bi bi-geo-alt"></i>Adresses</li>
                <li><i className="bi bi-gear"></i>Profile Settings</li>
                <li><i className="bi bi-box-arrow-right"></i>Logout</li>
            </ul>
            </div>

    )
}

export default UserSidebar;