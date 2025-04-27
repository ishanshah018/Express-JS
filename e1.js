var exp=require("express");
var app=exp();

app.get("/",(req,res)=>{
    res.set("content-type","text/html");
    res.send("<h1>Hello</h1>");
});

app.get("/about",(req,res)=>{
    res.set("content-type","text/html");
    res.send("<h1>Hello</h1>");
})


app.listen(3002);