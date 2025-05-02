const expr=require("express");
const app=expr();
const path=require("path");

css_path=path.join(__dirname,'../css');
image_path=path.join(__dirname,'../image');
html_path=path.join(__dirname,'../html')

app.use(expr.static(css_path));
app.use(expr.static(image_path));
app.use(expr.static(html_path,{index:'1.html'}));

app.listen(3004);