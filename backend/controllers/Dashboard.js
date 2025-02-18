import PostModel from "../models/Blog.js"
import UserModel from "../models/user.js"
import fs from 'fs'
import path from 'path'

const Getalldata=async(req,res)=>{
    try {
        const User=await UserModel.find()
        const Posts=await PostModel.find()
        

        if (!User && !Posts) {
            return res.status(404).json({success:false,message:"No data Found"})
        }
        return res.status(200).json({success:true,User,Posts})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

const Getuser=async(req,res)=>{
    try {
        const User=await UserModel.find()
        
        if (!User) {
            return res.status(404).json({success:false,message:"No data Found"})
        }
        return res.status(200).json({success:true,User})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

const Userdelete=async(req,res)=>{
    try {
        const userId=req.params.id
        const ExistUser=await UserModel.findById(userId)
        if(!ExistUser){
            return res.status(404).json({success:false,message:"No user Found"})
        }
        if(ExistUser.role=='admin'){
            return res.status(404).json({success:false,message:"Sorry only admin can delete your account"})
        }
        if (ExistUser.profile) {
            const profilepath=path.join('public/images',ExistUser.profile )
            fs.promises.unlink(profilepath)
            .then(()=>console.log('Post image deleted'))
            .catch(error=>console.log('error deleting post image',error))
        }
         const  DeleteUser =await UserModel.findByIdAndDelete(userId)
         return res.status(200).json({success:true,message:"User deleted successfully",user:DeleteUser})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

export {Getalldata,Getuser,Userdelete}
