const express = require('express');
const router = express.Router();

const requestController = require('../controller/request.js');


router.post("/requests", requestController.createRequest);
router.get("/requests", requestController.queryRequests);
router.get("/requests/:id", requestController.getRequest);
router.put("/requests/:id", requestController.updateRequest);
router.delete("/requests/:id", requestController.deleteRequest);


module.exports = router;
