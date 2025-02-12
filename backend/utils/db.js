import mongoose from "mongoose";

const DBcon =async()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/Blogapp')
        
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("MongoDB error",error)
    }
}
export default DBcon