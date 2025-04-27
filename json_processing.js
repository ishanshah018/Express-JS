//Send JSON object using res.send

const expr=require("express")
const app=expr();
student={name:"LJU",age:28}

app.get("/",(req,res)=>{
res.send(student)
})
app.listen(6007)

// wwhile in res.write(), we have to convert JSON object to string using JSON.stringify().