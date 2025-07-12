const User=require("../models/user")
const handleGetAllUsers= async(req,res)=>{
    const AlldbUsers= await User.find({});
    return res.json(AlldbUsers);
}

const GetUsersById=async(req,res)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    if(!user){
        return res.status(404).json({status:"User not found"});
    }
    return res.json(user);
}

const UpdateUserById=async(req,res)=>{
     const body=req.body;
    const result=await User.findByIdAndUpdate(req.params.id,body);
    res.json({Status:"Success"})
}
const DeleteUserById=async(req,res)=>{
      const id=req.params.id;
    const user=await User.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({status:"User not found"});
    }
    return res.json({status:"User deleted successfully"});
}

const CreateUser=async(req,res)=>{
     const body=req.body;
    const result=await User.create({
      first_name:body.first_name,
      last_name:body.last_name,
      email:body.email,
      gender:body.gender,
      job_title:body.job_title,
    })
    return res.json({status:"Success"})
}
module.exports={
    handleGetAllUsers,
    GetUsersById,
    UpdateUserById,
    DeleteUserById,
    CreateUser
}