const expr=require("express");
const app=expr();

const path=require("path");

const stpath=path.join(__dirname,"../");

app.use(expr.static(stpath));

app.listen(3009);