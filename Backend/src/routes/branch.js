const  express = require("express")
const router = express.Router()

const branchController = require("../controller/branch.js")
const auth = require("../auth.js")

router.post("/branches", branchController.createBranch)

router.get("/branches", branchController.getBranches)

router.get("/branches/:id", branchController.getBranch)

router.put("/branches/:id", branchController.updateBranch)

router.delete("/branches/:id", branchController.deleteBranch)

router.post("/branches/login", branchController.login)



module.exports = router