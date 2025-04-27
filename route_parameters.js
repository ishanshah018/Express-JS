var expr=require("express");
var app=expr();

app.get('/calendar/:day/event/:ename',(req,res)=>{
    res.send(req.params);
})
app.listen(3001);