import mongoose from "mongoose";

const DBcon =async()=>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/blogg')
        
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("MongoDB error",error)
    }
}
export default DBcon    
