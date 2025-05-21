var exp=require("express");
var app=exp();

app.use(exp.static(__dirname,{index:'g1.html'}))

app.get('/get_method',(req,res)=>{
    response={
        fname:req.query.fn,
        lname:req.query.ln
    };

    console.log(req.query);

    res.send(response)
});

app.listen(3006);