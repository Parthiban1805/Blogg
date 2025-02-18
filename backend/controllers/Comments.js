import PostModel from "../models/Blog.js"
import CommentModel from "../models/comments.js"

 

 const AddComment=async(req,res)=>{
    try {
        const {postId,userId,comment}=req.body

        const newComment=new CommentModel({
            postId,userId,comment
        })
        await newComment.save()
        const existpost =await PostModel.findById(postId)
        if (!existpost) {
         return res.status(404).json({success:false,message:"Blog post not Found"})
        }
        existpost.comments.push(newComment._id)
        await existpost.save()
        return res.status(200).json({success:true,message:"Comment added successfully",comment:newComment})
    } catch (error) {
        
    }
 }

 export default AddComment
