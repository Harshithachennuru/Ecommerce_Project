import react from 'react'
import './Login.css';
import {Link} from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setuserRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email: email,
                password:password,
                userRole:userRole
            })
        })
        .then((res)=>res.text())
        .then((data)=>{
            alert(data);
            if(data ==="Admin logged in successfully"){
                navigate("/admindashboard",{
                    state:{email:email}
                })
            }
            if(data ==="User logged in successfully"){
                navigate("/",{
                    state:{email:email}
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div className ="entire">
        <div className="left">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Login</h2> 

                <select className="role-select" onChange={(e)=> setuserRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>

                <input type="email" placeholder="Enter Email" className="email" onChange={(e)=>{setEmail(e.target.value)}}/>

                <input type="password" placeholder="Enter Password" className="password" onChange={(e)=>setPassword(e.target.value)}/>                

                <button type="submit" className = "btn btn-primary">Login</button>

                <p className="signupp">
                    Don't have an account?
                    <span className="signupp">
                        <Link to="/signup"> Signup</Link>
                    </span>
                </p>
            </form>
        </div>

        <div className="right">
            <img src="onlineshopping.webp" alt="onlineshopping" className="loginimg" />
        </div>
    </div>
  );
}

export default Login;