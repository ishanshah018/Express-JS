// Write express script to send json object to server and display and also display only age if '/age' used in url.

const expr=require("express");
const app=expr();

student={name:"LJU",age:28}

app.get("/",(req,res)=>{
    res.json(student);
});

app.get("/age",(req,res)=>{
    res.json(student.age);
})

app.listen(3002);