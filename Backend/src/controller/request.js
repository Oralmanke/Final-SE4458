const db = require("../database");

async function createRequest(req, res) {
    try {
        const requestData = req.body;
        const result = await db.query("INSERT INTO request (hospitalname, city, town, bloodtype, units, contactemail, requestdate, isfulfilled) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [requestData.hospitalname, requestData.city, requestData.town, requestData.bloodtype, requestData.units, requestData.contactemail, requestData.requestdate, requestData.isfulfilled]);
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error creating request:", error);
        return res.status(500).json({ error: "Failed to create request." });
    }
}


async function queryRequests(req, res) {
    try {
        const requests = await db.query("SELECT * FROM request");
        return res.status(200).json(requests.rows);
    } catch (error) {
        console.error("Error getting requests:", error);
        return res.status(500).json({ error: "Failed to get requests." });
    }
}

async function getRequest(req, res) {
    try {
        const requestId = req.params.id;
        const request = await db.query("SELECT * FROM request WHERE requestid = $1", [requestId]);
        return res.status(200).json(request.rows[0]);
    } catch (error) {
        console.error("Error getting request:", error);
        return res.status(500).json({ error: "Failed to get request." });
    }
}

async function updateRequest(req, res) {
    try {
        const requestId = req.params.id;
        const requestData = req.body;
        const result = await db.query("UPDATE request SET hospitalname = $1, city = $2, town = $3, bloodtype = $4, units = $5, contactemail = $6, requestdate = $7, isfulfilled = $8 WHERE requestid = $9 RETURNING *",
        [requestData.hospitalname, requestData.city, requestData.town, requestData.bloodtype, requestData.units, requestData.contactemail, requestData.requestdate, requestData.isfulfilled, requestId]);
        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("Error updating request:", error);
        return res.status(500).json({ error: "Failed to update request." });
    }
}


async function deleteRequest(req, res) {
    try {
        const requestId = req.params.id;
        await db.query("DELETE FROM request WHERE requestid = $1", [requestId]);
        return res.status(200).json({ message: "Request deleted successfully." });
    } catch (error) {
        console.error("Error deleting request:", error);
        return res.status(500).json({ error: "Failed to delete request." });
    }
}


module.exports = {
    createRequest,
    queryRequests,
    getRequest,
    updateRequest,
    deleteRequest
};
    
    
