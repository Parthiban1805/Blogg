import UserModel from "../models/user.js"


const Register = async(req,res)=>{
    try {
       
        const {FullName,email,password}=req.body
        // const email='sabarevijay2001@gmail.com'
        
        const existUser = await UserModel.find({email})
        if(!existUser){
            return res.status(409).json({
                success:false,
                message:"User already exist"
            })
        }
        
        const newUser = new UserModel({
            FullName,email,password
        })
        await newUser.save()
        return res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            user:newUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server occured"
        })
    }

}

export { Register }

