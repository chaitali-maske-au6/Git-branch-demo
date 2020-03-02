var express = require("express")

var app = express()

app.get("/",function(req, res){
    res.send("hello world")
});

app.get("/users",function(req, res){
    res.send("user route")
})

app.listen(1234,function(){
    console.log("server connected")
})