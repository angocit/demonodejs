import mongoose from "mongoose";
const UserSChema = mongoose.Schema({
    fullname:String,
    email:{
        type:String,
        unique:true
    },
    password:String
},
{
    timestamps:true
}
)
const UserModel = mongoose.model('users', UserSChema)
export default UserModel