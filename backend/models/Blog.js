import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
    },
    category: {  
        type: String,
        required: true,
        enum: ['Competitions', 'Achievements', 'Project', 'Placement', 'Product development', 'Start-up']
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comments"
    },
},{timestamps:true})

const PostModel=mongoose.model("Posts",PostSchema)

export default PostModel