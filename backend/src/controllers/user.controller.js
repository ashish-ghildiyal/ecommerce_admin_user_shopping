import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



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


const LoginUser = async(req, res)=>{

    try {
         const {email, password} = req.body;

        if(!email && !password){
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields"
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "email does not exists"
            })
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Password is incorrect"
            })
        }

        // create token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role,
                userName: user.userName

            }, 
            process.env.JWT_SECRET, 
            {expiresIn: "1d"}
        );
        console.log(token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });



    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user:{
            id: user._id,
            userName: user.userName,
            email: user.email,
            role: user.role
        }
    });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
        
    }
} 

// Logout

const LogoutUser =(req, res)=>{
    try {
    res.clearCookie("token",{
      httpOnly: true,
      secure: true, // Only send over HTTPS in production
      sameSite: "lax",
    });  
     res.status(200).json({
        success:true,
        message: 'Logout successfully'
    })  
} catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging out",
    });
}
   

}



// auth middleware

const AuthMiddleware =(req,res,next)=>{
      const token = req?.cookies?.token
        if(!token) return res.status(401).json({
            success:false,
            message: "Unauthorized user! No token found",
        })
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();

        
    } catch (error) {
        res.status(401).json({
            success:false,
            message: 'Invalid or expired token!'
        })
        
    }

}


export {registerUser, LoginUser, AuthMiddleware, LogoutUser}