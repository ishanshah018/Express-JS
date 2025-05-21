var expr=require("express")
var app=expr()

app.get('/user/:name/userid/:id',(req,res)=>{
    console.log(req.params);
    res.send();
})

app.listen(3004);