import React from "react";

const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <div className="home">
            <div className="row">
                <div className="Button">
                    <button className="btn btn-primary" type="button" onClick={() => window.location.href="/addblood"}>Add Blood</button>
                </div>
                <div className="Button">
                    <button className="btn btn-primary" type="button" onClick={() => window.location.href="/adddonor"}>Add Donor</button>
                </div>
                <div>
                    <button className="btn btn-primary" type="button" onClick={() => window.location.href="/request"}>Request</button>
                </div>
            </div>
        </div> 
    </div>
    );
}

export default Home;