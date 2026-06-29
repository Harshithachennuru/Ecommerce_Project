import react from 'react'
import './Signup.css';
import {Link} from 'react-router-dom'
import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Signup() {
    const[email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setconfirmPassword] = useState("");
    const[userRole, setuserRole] = useState("");
    const Navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3000/signup",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email: email,
                password:password,
                confirmPassword:confirmPassword,
                userRole:userRole
            })
        })
        .then((res) => res.text())
        .then((data) => {
            alert(data);
            console.log(data);
            if(data =="registered successfully"){
                Navigate("/login")
            }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  return (
    <div className ="entire">
        <div className="left">
            <form className="form" onSubmit={handleSubmit}>
                <h2 style={{fontWeight:"bold"}}>SignUp</h2> 

                <input type="email" placeholder="Enter Email" className="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <input type="password" placeholder="Enter Password" className="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>  
                <input type="password" placeholder="Confirm Password" className="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>  
                <select value={userRole}className="role-select" onChange={(e)=>setuserRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>            


                <button className='btn btn-primary' type="submit">Signup</button>

                <p className="signupp">
                    Already have an account?
                    <span className="Loginp">
                        <Link to="/login">Login</Link>
                    </span>
                </p>
            </form>
        </div>

        <div className="right">
            <img src="onlineshopping.webp" alt="onlineshopping" className="signupimg"/>
        </div>
    </div>
  );
}

export default Signup;