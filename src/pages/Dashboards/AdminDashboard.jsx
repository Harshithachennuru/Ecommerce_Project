import react from 'react'
import './AdminDashboard.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../../Components/Navbar/Sidebar'

function AdminDashboard(){
    return(
        <div>
            <div className="full">
                <div>
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;