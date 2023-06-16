const db = require("../database");

async function createDonor(req, res) {
    try {
      const { Fullname, BloodType, Town, City, PhoneNo, PhotoURL, BranchID } = req.body;
  
      const donor = await db.query(
        "INSERT INTO donor (Fullname, BloodType, Town, City, PhoneNo, PhotoURL, BranchID) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [Fullname, BloodType, Town, City, PhoneNo, PhotoURL, BranchID]
      ); 
  
      return res.status(201).json(donor.rows[0]);
    } catch (error) {
      console.error('Error creating donor:', error);
      return res.status(500).json({ error: 'Failed to create donor.' });
    }
  }

  async function queryDonors(req, res) {
    try {
      const donors = await db.query("SELECT * FROM donor");
      return res.status(200).json(donors.rows);
    } catch (error) {
      console.error('Error getting donors:', error);
      return res.status(500).json({ error: 'Failed to get donors.' });
    }
  }

  async function getDonor(req, res) {
    try {
      const donorId = req.params.id;
      const donor = await db.query("SELECT * FROM donor WHERE DonorID = $1", [donorId]);
      return res.status(200).json(donor.rows[0]);
    } catch (error) {
      console.error('Error getting donor:', error);
      return res.status(500).json({ error: 'Failed to get donor.' });
    }
  }

  async function updateDonor(req, res) {
    try {
      const { Fullname, BloodType, Town, City, PhoneNo, Photo, BranchID } = req.body;

      const donor = await db.query(
        "UPDATE donor SET Fullname = $1, BloodType = $2, Town = $3, City = $4, PhoneNo = $5, Photo = $6, BranchID = $7 WHERE DonorID = $8 RETURNING *",
        [Fullname, BloodType, Town, City, PhoneNo, Photo, BranchID, req.params.id]
      );

      return res.status(200).json(donor.rows[0]);
    } catch (error) {
      console.error('Error updating donor:', error);
      return res.status(500).json({ error: 'Failed to update donor.' });
    }
  }

  async function deleteDonor(req, res) {
    try {
      const donorId = req.params.id;
      await db.query("DELETE FROM donor WHERE DonorID = $1", [donorId]);
      return res.status(200).json({ message: 'Donor deleted successfully.' });
    } catch (error) {
      console.error('Error deleting donor:', error);
      return res.status(500).json({ error: 'Failed to delete donor.' });
    }
  }



  module.exports = {
    createDonor,
    queryDonors,
    getDonor,
    updateDonor,
    deleteDonor
    };