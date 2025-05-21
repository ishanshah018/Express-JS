var exp=require("express");
var app=exp()

app.use(exp.urlencoded({extended:false}));

app.use(exp.static(__dirname,{index:'p1.html'}));

app.post('/post_method',(req,res)=>{
    console.log(req.body.fn+"-"+req.body.ln);
    res.send(req.body);
})

app.listen(3004);