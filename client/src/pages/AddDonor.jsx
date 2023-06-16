import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const AddDonor = () => {
    const [donor, setDonor] = useState({
        FullName:"",
        BloodType:"",
        Town:"",
        City:"",
        PhoneNo:"",
        BranchID:"",
        photoURL:""

    });
    const {FullName, BloodType, Town, City, PhoneNo, BranchID, photoURL} = donor;

    const onInputChange = e => {
        setDonor({...donor, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        try{
            const res = await axios.post("/donors", donor);
            console.log(res);
        }catch(err){
            console.log(err);
        }

    };

    const getDonors = async () => {
        try{
            const res = await axios.get("/donors");
            console.log(res);
        }catch(err){
            console.log(err);
        }
    };
    


    return (
        <div className="donor">
        <h1>Add Donor</h1>
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" placeholder="FullName" name="FullName" value={FullName} onChange={e => onInputChange(e)} />
            <input type="text" placeholder="BloodType" name="BloodType" value={BloodType} onChange={e => onInputChange(e)} />
            <input type="text" placeholder="Town" name="Town" value={Town} onChange={e => onInputChange(e)} />
            <input type="text" placeholder="City" name="City" value={City} onChange={e => onInputChange(e)} />
            <input type="text" placeholder="PhoneNo" name="PhoneNo" value={PhoneNo} onChange={e => onInputChange(e)} />
            <input type="text" placeholder="BranchID" name="BranchID" value={BranchID} onChange={e => onInputChange(e)} />
            <input type="text" placeholder="photoURL" name="photoURL" value={photoURL} onChange={e => onInputChange(e)} />
            <button type="submit">Add</button>
        </form>
        </div>
    );
    }

export default AddDonor;
