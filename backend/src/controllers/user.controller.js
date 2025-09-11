import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
//Register
const registerUser = async(req,res)=>{
    const {userName, email, password} = req.body;
    try {

        if(!userName || !email || !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            });
        }

        // if userName alredy exists
        const userExists = await User.findOne({userName});
        if(userExists){
            return res.status(400).json({
                success: false,
                message: "UserName already exists"
            });
        }

        // if user email already exists
        const emailExists = await User.findOne({email});
        if(emailExists){
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
            
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User registered successfully"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
        
    }

}


export {registerUser}