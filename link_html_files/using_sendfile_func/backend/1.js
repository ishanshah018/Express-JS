const expr=require("express");
const app=expr();

const path=require("path");

const stpath=path.join(__dirname,"../frontend");


// Links only HTML content
app.get('/',(req,res)=>
    {
    res.sendFile(stpath +"/1.html");
    }
);

// To Link CSS Content

app.use(expr.static(stpath)); 

app.listen(3008);
