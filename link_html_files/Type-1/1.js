var expr=require("express");
var app=expr();

app.use(expr.static(__dirname));

app.listen(3004);