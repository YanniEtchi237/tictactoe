var express = require("express")

var app= express()

app.use(express.static('public'))

app.listen(3000,()=>{
    console.log("server is running at port 3000.....");
})
