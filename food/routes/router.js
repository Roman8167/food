const express = require("express");
const router = express.Router();
const mongodb = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const dataBaseUpload = require("../models/postSchema");
const bodyParser = require("body-parser");
router.use(bodyParser.json())
const urlencoded = bodyParser.urlencoded({extended:false});
router.get("/",function(req,res){
    res.render("index.ejs")
});;
router.post("/upload",urlencoded,function(req,res){
    mongodb.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db('myorders');
        dbo.collection("Orders").insertOne(req.body,function(err,res){
            if(err) throw err;
            console.log("Posted to the database")
        });
        res.redirect("/");

    })
});









module.exports = router