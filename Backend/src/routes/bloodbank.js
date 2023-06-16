const express = require ("express")
const router = express.Router() 


const bloodbankController = require("../controller/bloodbank.js")
const auth = require("../auth.js")

router.post("/bloodbanks",bloodbankController.addBloodBank)
router.get("/bloodbanks", bloodbankController.getBloodBank)
router.get("/bloodbanks/:id", bloodbankController.getBloodBankById)
router.put("/bloodbanks/:id", bloodbankController.updateBloodBank)
router.delete("/bloodbanks/:id", bloodbankController.deleteBloodBank)


module.exports = router