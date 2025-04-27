// Write Express JS script to request server to display json object (Array of Objects) in table form on browser.

const expr=require("express")
const app=expr();
student={
u1:[{name:"LJU",id:2},
{name:"LJU1",id:3},
{name:"LJU2",id:4},
{name:"LJU3",id:5},
{name:"LJU4",id:6}]}
app.get("/student",(req,res)=>{
res.set("content-type","text/html")
res.write("<center><table cellspacing='5px' cellpadding='8px'border='1px solid'><tr><th>Name</th><th>ID</th></tr>");


for(i of student.u1)
    {
        res.write("<tr><td>" + i.name + "</td>")
        res.write("<td>" + JSON.stringify(i.id) + "</td></tr>")
    }

res.write("</table></center>")
res.send()
})
app.listen(6007)