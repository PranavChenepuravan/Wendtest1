import mongoose from "mongoose";

let userShema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    rpass:{
        type:String
    }
})

let User=mongoose.model('user',userShema)

export default User