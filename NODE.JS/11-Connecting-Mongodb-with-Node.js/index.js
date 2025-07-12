const express=require('express')
const mongoose=require('mongoose')
const PORT=8000;
const app=express();
// connection to mongodb
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://127.0.0.1:27017/Mock_DATA').then(()=>console.log("Mongodb Connected")).catch((err)=>console.log("Error: ",err));

app.listen(PORT,()=>{
    console.log("Sever Started...");
})
const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    job_title:{
        type:String,
        required:true
    }})
const User=mongoose.model("user",userSchema);

// Get all users
app.get("/api/users",async(req,res)=>{
    const result=await User.find({});
    return res.json(result);
})

// Create a new user
app.post("/api/users",async(req,res)=>{
    const body=req.body;
    const result=await User.create({
      first_name:body.first_name,
      last_name:body.last_name,
      email:body.email,
      gender:body.gender,
      job_title:body.job_title,
    })
    return res.json({status:"Success"})
})

// Get users in a Web Page
app.get("/users",async(req,res)=>{
    const AlldbUsers=await User.find({});
    
    const html=`
    <ul>
        ${AlldbUsers.map((user)=>`<li>${user.first_name}--${user.email}</li>`)}
    </ul> 
    `
    res.send(html)
})

app.route("/api/users/:id").get(async(req,res)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    if(!user){
        return res.status(404).json({status:"User not found"});
    }
    return res.json(user);
}).patch(async(req,res)=>{
     const body=req.body;
    const result=await User.findByIdAndUpdate(req.params.id,body);
    res.json({Status:"Success"})
}).delete(async(req,res)=>{
    const id=req.params.id;
    const user=await User.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({status:"User not found"});
    }
    return res.json({status:"User deleted successfully"});
})
