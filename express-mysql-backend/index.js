require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")


const donorRouter = require("./api/donor/donor.router");
const bloodBankRouter = require("./api/bloodBank/bloodbank.router")
const hospitalRouter = require("./api/hospital/hospital.router")
const bloodQuantityRouter = require("./api/bloodInventory/bloodInventory.router");
const campaignRouter = require("./api/campaigns/campaign.router")
const requestRouter = require("./api/requests/request.router")
const userRouter = require("./api/users/user.router")


app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/donor", donorRouter)
app.use("/bloodbank",bloodBankRouter)
app.use("/hospital", hospitalRouter)
app.use("/bloodquantity", bloodQuantityRouter)
app.use("/campaigns", campaignRouter)
app.use("/request", requestRouter)
app.use("/users", userRouter)


app.listen(process.env.port, ()=>{
    console.log("server is running at ", process.env.port);
})

