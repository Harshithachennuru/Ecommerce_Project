import './App.css';
import react from 'react';
import Home from './pages/Home/Home.jsx';
import EcommerceNavbar from './Components/Navbar/Navbar.jsx';
import Products from './pages/Products/Products.jsx'
import {Routes,Route} from 'react-router-dom'
import CartPage from './pages/CartPage/CartPage'
import Login from './pages/Authentication/Login.jsx'
import Signup from './pages/Authentication/Signup.jsx'

function App(){
  return(
    <div style={{overflow:'hidden'}}>
      <EcommerceNavbar />
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product/:id" element={<Products/>}/>
        <Route path="/mycart" element={<CartPage/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>} />
      </Routes>   */}

      <Home/>

    </div>
  )
}
export default App;