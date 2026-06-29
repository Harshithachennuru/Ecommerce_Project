import React from 'react'
import Sidebar from '../../Components/Navbar/Sidebar'

function Customers(){
  return (
    <div>
      <div>
      <Sidebar />
      </div>
      <div>
        <div className="navbar">
          Customers
        </div>

        <div>
          <table>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined on</th>
              <th>Number of Orders</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Customers
