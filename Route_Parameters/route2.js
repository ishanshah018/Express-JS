const expr=require("express");
var app=expr();

app.get("/profile/:username",(req,res)=>{
    console.log(req.params);
    res.send(`<h1>Username is: ${req.params.username}</h1>`);
})

app.get("/profile/:username/article/:slug",(req,res)=>{
    console.log(req.params);

    const formatedslug=req.params.slug.replace(/-/g," ");

    res.send(`<h1>Username is: ${req.params.username} and article is ${formatedslug}</h1>`);
})

app.listen(3004);