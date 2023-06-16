import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [register, setRegister] = useState({
        BranchName:"",
        Password:""
    }
    );

    const navigate = useNavigate()
    const handleChange = (e) => {
        setRegister({...register, [e.target.name]: e.target.value});
    }

    console.log(register);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/branches", register);
            navigate("/login")
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder="BranchName" name="BranchName" value={register.BranchName} onChange={handleChange} />
            <input type="password" placeholder="Password" name="Password" value={register.Password} onChange={handleChange} />
            <button onClick={handleSubmit} type="submit">Register</button>
        </form>
        </div>
    );
    }

export default Register;