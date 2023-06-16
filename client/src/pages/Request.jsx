import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



const Request = () => {
    const [request, setRequest] = useState({
        hospitalname:"",
        city:"",
        town:"",
        bloodtype:"",
        units:"",
        contactemail:"",
        requestdate:"",
        isfulfilled:""
    }
);



    const handleChange = (e) => {
        setRequest({...request, [e.target.name]: e.target.value});
    }

    console.log(request);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/requests", request);
            console.log(res);
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className="request">
        <h1>Request</h1>
        <form>
            <input type="text" placeholder="Hospital Name" name="hospitalname" value={request.hospitalname} onChange={handleChange}/>
            <input type="text" placeholder="City" name="city" value={request.city} onChange={handleChange}/>
            <input type="text" placeholder="Town" name="town" value={request.town} onChange={handleChange}/>
            <input type="text" placeholder="Blood Type" name="bloodtype" value={request.bloodtype} onChange={handleChange}/>
            <input type="text" placeholder="Units" name="units" value={request.units} onChange={handleChange}/>
            <input type="text" placeholder="Contact Email" name="contactemail" value={request.contactemail} onChange={handleChange}/>
            <input type="text" placeholder="Request Date" name="requestdate" value={request.requestdate} onChange={handleChange}/>
            <input type="text" placeholder="Is Fulfilled" name="isfulfilled" value={request.isfulfilled} onChange={handleChange}/>
            <button onClick={handleSubmit} type="submit">Request</button>
        </form>
        </div>
    );
}

export default Request;