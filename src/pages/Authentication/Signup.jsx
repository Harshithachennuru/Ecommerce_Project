import react from 'react'
import './Signup.css';

function Signup() {
  return (
    <div className ="entire">
        <div className="left">
            <form className="form">
                <h2>SignUp</h2> 

                <input type="email" placeholder="Enter Email" className="email"/>

                <input type="password" placeholder="Enter Password" className="password"/>  
                <input type="password" placeholder="Confirm Password" className="password"/>  

                <select className="role-select">
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>   

                <p className="Loginp">
                    Already have an account? <span className="Login"> Login</span>
                </p>         

                <button className="btn btn-primary">
                    Signup
                </button>
            </form>
        </div>

        <div className="right">
            <img src="onlineshopping.webp" alt="onlineshopping" className="signupimg"/>
        </div>
    </div>
  );
}

export default Signup;