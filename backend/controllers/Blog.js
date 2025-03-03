import PostModel from "../models/Blog.js"
import fs from 'fs'
import path from 'path'

import jwt from 'jsonwebtoken'; 
import cookieParser from 'cookie-parser';

const Create =async(req,res)=>{
    try {
        console.log('Cookies:', req.cookies);
        console.log('Headers:', req.headers);

        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
        console.log('Extracted Token:', token);

        if (!token) {
            return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
        }

        const decoded = jwt.verify(token, 'THIS IS BLOG APP');
        console.log('Decoded User:', decoded);

        const { title, desc, category } = req.body;

        if (!title || !desc || !category) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Image file is required' });
        }

        const imagePath = req.file.filename;
        return res.status(201).json({
            success: true,
            message: "Post Created Successfully",
            post: { title, desc, image: imagePath, category }
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const deletePost=async(req,res)=>{
    try {
        const postId=req.params.id
        const FindPost =await PostModel.findOne({ _id: postId })
        if(!FindPost){
            return res.status(404).json({success:false,message:"Post not found"})
        }
        if (FindPost.image) {
            const profilepath=path.join('public/images',FindPost.image )
            fs.promises.unlink(profilepath)
            .then(()=>console.log('Post image deleted'))
            .catch(error=>console.log('error deleting post image',error))
        }
        const deletedPost =await PostModel.findByIdAndDelete(postId)
        return res.status(200).json({success:true,message:"Post deleted Successfully",post:deletedPost})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

const getposts=async(req,res)=>{
    try {
        const posts=await PostModel.find()
        if(!posts){
            return res.status(404).json({success:false,message:"Post not found"})
        }
        
        return res.status(200).json({success:true,posts})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

const update=async(req,res)=>{
    try {

        const {title,desc}=req.body
        const postId=req.params.id

        const postUpdate= await PostModel.findById(postId)
        if (!postUpdate) {
            return res.status(404).json({success:false,message:"Post not found"})
        }  
        if (title) {
            postUpdate.title=title
        }      
        if (desc) {
            postUpdate.desc=desc
        }
        if (req.file) {
            postUpdate.image=req.file.filename
        }
        await postUpdate.save()
        return res.status(200).json({success:true,message:"Post updated Successfully",post:postUpdate})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

export {Create,deletePost,getposts,update}

