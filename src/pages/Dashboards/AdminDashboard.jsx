import React from 'react'
import './AdminDashboard.css'
import Sidebar from '../../Components/Navbar/Sidebar'
import {useLocation} from 'react-router-dom'
import EcommerceNavbar from '../../Components/Navbar/Navbar'
function AdminDashboard(){
    const location = useLocation();
    const user = location.state?.user;
    return(
        <div>
            <Sidebar/>
            <EcommerceNavbar/>
            <div className="dashboard">
                <h2>Admin Dashboard</h2>
                {user && 
                    <div>
                        <h3>Welcome Admin</h3>
                        <p>Email : {user.email}</p>
                        <p>Role : {user.role}</p>

                    </div>
                }


            </div>


        </div>
    )
}

export default AdminDashboard;