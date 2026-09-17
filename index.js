let express=require('express');
let app=express();
//localhost:3000/addstudent
app.post("/addStudent",(req,res)=>{
    res.send("Add student called");
});
//localhost:3000/getstudents
app.get("/getStudent",(req,res)=>{
    res.send("Get student called");
});
//run the server
app.listen(3002,()=>{
    console.log("server is running on port 3002");
})
app.put("/updateStudent",(req,res)=>{
    res.send("Update student called");
})