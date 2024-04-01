import UserModel from "../models/auth.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const Register= async(req,res)=>{
    try {
        const body = req.body;
        // kiểm tra email đã tồn tại hay chưa
        const user = await UserModel.findOne({email:body.email});
        console.log(user);
        if (user!==null){
            res.send({status:false,message:"Email đã tồn tại"})
        }
        else {
            body.password = await bcrypt.hash(body.password,10)
            const newuser = await new UserModel(body).save();
            newuser.password = undefined
            res.send({status:true,message:"Đăng ký thành công",user:newuser})
        }
    } catch (error) {
        res.send({status:false,message:"Lỗi không xác định"})
    }
}
export const Login= async(req,res)=>{
    try {
        const body = req.body;
        // kiểm tra email đã tồn tại hay chưa
        const user = await UserModel.findOne({email:body.email});
        if (user!==null){
            // Ktra mật khẩu khớp không.
            const verify = await bcrypt.compare(body.password,user.password)
            if (verify){ // Khớp MK
                user.password = undefined
                const token = await jwt.sign({udid:user._id},'123456')
                res.send({status:true,userdata:user, message:"Đăng nhập thành công",token:token})
            }
            else{
                res.send({status:false,message:"sai mật khẩu"})
            }
        }
        else {
            res.send({status:false,message:"Không tồn tại tài khoản này"})
        }
    } catch (error) {
        res.send({status:false,message:"Lỗi không xác định"})
    }
}