import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState({
        BranchName:"",
        Password:""
    }
    );
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    console.log(login);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/branches/login", login);
            console.log(res);
            navigate("/")
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className="auth">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="BranchName" name="BranchName" value={login.BranchName} onChange={handleChange} />
            <input type="password" placeholder="Password" name="Password" value={login.Password} onChange={handleChange} />
            <button onClick={handleSubmit} type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;