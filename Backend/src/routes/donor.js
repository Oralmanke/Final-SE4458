const express = require('express');
const router = express.Router();

const donorController = require('../controller/donor.js');
const auth = require('../auth.js');


router.post("/donors", auth.auth, donorController.createDonor);
router.get("/donors", auth.auth, donorController.queryDonors);
router.get("/donors/:id", auth.auth, donorController.getDonor);
router.put("/donors/:id", auth.auth, donorController.updateDonor);
router.delete("/donors/:id", auth.auth, donorController.deleteDonor);


module.exports = router;