var expr=require("express");
var app=expr();

var path=require("path");

var stpath=path.join(__dirname,"../frontend");

app.use(expr.static(stpath,{index:"1.html"}));

app.listen(3005);