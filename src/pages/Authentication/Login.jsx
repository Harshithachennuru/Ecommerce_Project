import react from 'react'
import './Login.css';

function Login() {
  return (
    <div className ="entire">
        <div className="left">
            <form className="form">
                <h2>Login</h2> 

                <select className="role-select">
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <input type="email" placeholder="Enter Email" className="email"/>

                <input type="password" placeholder="Enter Password" className="password"/>                

                <button className="btn btn-primary">
                    Login
                </button>

                <p className="signupp">
                    Don't have an account?
                    <span className="signup">Signup</span>
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