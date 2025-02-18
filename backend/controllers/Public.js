import PostModel from "../models/Blog.js"


const Getsinglepost =async(req,res)=>{
    try {
        const postId=req.params.id
        const FindPost = await PostModel.findById(postId)
        .populate({
            path:'comments',
            populate:{
                path:"userId"
            }
        })

        if (!FindPost) {
            return res.status(404).json({success:false,message:"Blog post not Found"})
        }
        return res.status(200).json({success:true,Post:FindPost})

    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"})
        
    }
}

export {Getsinglepost}
