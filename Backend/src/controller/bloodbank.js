const db = require('../database');


async function addBloodBank(req, res) {
    try {
        const { Bloodtype, DonorName, DonationDate, units, Branchid } = req.body;
        
        const bloodbank = await db.query(
            "INSERT INTO bloodbank (Bloodtype, DonorName, DonationDate, units, Branchid) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [Bloodtype, DonorName, DonationDate, units, Branchid]
        );

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
}

async function getBloodBank(req, res) {
    try {
        const bloodbank = await db.query("SELECT * FROM bloodbank");
        return res.status(200).json(bloodbank.rows);
    } catch (error) {
        console.error('Error getting bloodbank:', error);
        return res.status(500).json({ error: 'Failed to get bloodbank.' });
    }
}

async function getBloodBankById(req, res) {
    try {
        const bloodbankId = req.params.id;
        const bloodbank = await db.query("SELECT * FROM bloodbank WHERE BloodbankID = $1", [bloodbankId]);
        return res.status(200).json(bloodbank.rows[0]);
    } catch (error) {
        console.error('Error getting bloodbank:', error);
        return res.status(500).json({ error: 'Failed to get bloodbank.' });

    }   
}

async function updateBloodBank(req, res) {
    try {
        const { Bloodtype, DonorName, DonationDate, units, Branchid } = req.body;

        const bloodbank = await db.query(
            "UPDATE bloodbank SET Bloodtype = $1, DonorName = $2, DonationDate = $3, units = $4, Branchid = $5 WHERE BloodbankID = $6 RETURNING *",
            [Bloodtype, DonorName, DonationDate, units, Branchid, req.params.id]
        );

        return res.status(200).json(bloodbank.rows[0]);
    } catch (error) {
        console.error('Error updating bloodbank:', error);
        return res.status(500).json({ error: 'Failed to update bloodbank.' });
    }
}

async function deleteBloodBank(req, res) {
    try {
        const bloodbankId = req.params.id;
        await db.query("DELETE FROM bloodbank WHERE BloodbankID = $1", [bloodbankId]);
        return res.status(200).json({ message: 'Bloodbank deleted successfully.' });
    } catch (error) {
        console.error('Error deleting bloodbank:', error);
        return res.status(500).json({ error: 'Failed to delete bloodbank.' });
    }
}


module.exports = {
    addBloodBank,
    getBloodBank,
    getBloodBankById,
    updateBloodBank,
    deleteBloodBank
};
