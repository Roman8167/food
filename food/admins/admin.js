const express  = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ejs = require("ejs");
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const views = express().set("view engine","ejs");
const bodyParser = require("body-parser");
const urlencoded = bodyParser.urlencoded({extended:false});
router.get("/admin",function(req,res){
    mongodb.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("myorders");
        dbo.collection("Orders").find({}).toArray(function(err,data){
            if(err) throw err
            res.render("../admin front-end/admin.ejs",{data:data})
        })
    })
})



module.exports = router;