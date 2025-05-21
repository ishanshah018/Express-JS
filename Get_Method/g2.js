var exp=require("express")
var app=exp()

app.use(exp.static(__dirname,{index:'g2.html'}));

app.get("/login",(req,res)=>{
    res.set('content-type','text/html');

    t1=(req.query.message).split(".");

    for(i in t1)
    {
        res.write(t1[i]+"<br>")
    }

    res.send();
});

app.listen(3005);