import './App.css';
import react from 'react';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx'
import {Routes,Route} from 'react-router-dom'
import CartPage from './pages/CartPage/CartPage'
import Login from './pages/Authentication/Login.jsx'
import Signup from './pages/Authentication/Signup.jsx'
import AdminDashboard from './pages/Dashboards/AdminDashboard.jsx';
import UserDashboard from './pages/Dashboards/UserDashboard.jsx';
import AddProduct from './pages/Dashboards/AddProduct.jsx';
import Customers from './pages/Dashboards/Customers.jsx';

function App(){
  return(
    <div style={{overflow:'hidden'}}>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Product/:id" element={<Products/>}/>
        <Route path="/mycart" element={<CartPage/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>} />
        <Route path="/admindashboard" element ={<AdminDashboard/>}/>
        <Route path="/addproduct" element ={<AddProduct/>} />
        <Route path="/customers" element={<Customers/>} />
      </Routes>
    </div>
  )
}
export default App;