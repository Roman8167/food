const express = require("express");
const app =  express();
const admins = require("./admins/admin");
const router = require("./routes/router");
const admin = require("./admins/admin");
const ejs = require("ejs");
app.set("view engine","ejs");
app.use(express.static("./views"));
app.use("/",router)
app.use("/order",router)
app.use("/",admin)
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is up and running at ${port}`)
})