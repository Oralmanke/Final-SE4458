require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())


const bloodbankRouter = require("./routes/bloodbank")
const branchRouter = require("./routes/branch")
const donorRouter = require("./routes/donor")
const requestRouter = require("./routes/request")

const routers = [bloodbankRouter, branchRouter, donorRouter, requestRouter];

const baseRoute = '/v1';

routers.forEach(router => {
  app.use(baseRoute, router);
});

app.listen(8000,() => {
	console.log("Backend server succesfully started at the 8000 port.")
})
