var express = require("express");
var authenticate = require("./middleware/authenticat")

var app = express()

function basicLogger(req, res, next){
    console.log(req.url);
    next();
}

app.get("/", basicLogger,function(req, res){
    res.send("hello world")
});

app.get("/users", basiclogger,authenticate,function(req, res){
    res.send("user route")
});

app.get("/someRoute", function(req, res){
    res.send("some route")
});

app.get("/someOtherRoute", function(req,res){
    res.send("some other route")
})

app.listen(1234,function(){
    console.log("server connected")
})