import React, { useEffect, useState } from "react";
import axios from "axios";

const AddBlood = () => {
  const [blood, setBlood] = useState({
    Bloodtype: "",
    DonorName: "",
    DonationDate: "",
    units: "",
    Branchid: "",
  });
  const { Bloodtype, DonorName, DonationDate, units, Branchid } = blood;

  const bloodTypes = ["AB", "O+", "O-", "B-", "B+", "A-", "A+"]; // List of blood types

  const onInputChange = (e) => {
    setBlood({ ...blood, [e.target.name]: e.target.value });
  };


  console.log(blood);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/bloodbanks", blood);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getDonors = async () => {
    try {
        const res = await axios.get("/donors");
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

  return (
    <div className="blood">
      <h1>Add Blood</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <select
          name="Bloodtype"
          value={Bloodtype}
          onChange={(e) => onInputChange(e)}
        >
          <option value="">Select Blood Type</option>
          {bloodTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="DonorName"
          name="DonorName"
          value={DonorName}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          placeholder="DonationDate"
          name="DonationDate"
          value={DonationDate}
          onChange={(e) => onInputChange(e)}
        />
        <input
          type="text"
          placeholder="units"
          name="units"
          value={units}
          onChange={(e) => onInputChange(e)}
        />
        <input
            type="text"
            placeholder="Branchid"
            name="Branchid"
            value={Branchid}
            onChange={(e) => onInputChange(e)}
        />
        <button onClick={(e) => onSubmit(e)} type="submit">
            Add Blood
        </button>
      </form>
    </div>
  );
};

export default AddBlood;
