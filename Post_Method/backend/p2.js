var exp=require("express");
var app=exp();
var path=require("path");

app.use(exp.urlencoded());

const strpath=path.join(__dirname,"../frontend");

app.use(exp.static(strpath,{index:'p2.html'}));

app.post("/login",(req,res)=>{
    if(req.body.uname=='admin')
    {
        res.write("<h1>Welcome Admin</h1>");
    }
    else
    {
        res.write("<h1>Please Login with Admin Page</h1>")
    }

    res.send();
});

app.listen(3005);