var express = require("express");
var authenticate = require("./middleware/authenticat")

var app = express()

app.get("/",function(req, res){
    res.send("hello world")
});

app.get("/users", authenticate,function(req, res){
    res.send("user route")
})

app.listen(1234,function(){
    console.log("server connected")
})