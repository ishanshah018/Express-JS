// Write an express js script to define one JSON array of 3 objects having properties name and age. Sort this object
// according to age. If user requests sorted names in url then all names along with age should be printed according to
// descending order of age. Also, display these sorted values on “Sort page” and display JSON object on “Home page”

var expr=require("express");
var app=expr();

student = [{name:"abc",age:45},
    {name:"def",age:55},
    {name:"xyz",age:28}];

app.get("/",(req,res)=>{
    res.set("content-type","text/html");
    res.send(student);
});

app.get("/sort",(req,res)=>{
    res.set("content-type","text/html");
    
    srt=student.sort((a,b)=>b.age-a.age);

    for(i=0;i<srt.length;i++)
    {
        res.write("<h2>"+srt[i].name+"="+srt[i].age+"</h2>");
    }
    res.send()
});

app.listen(3002);
