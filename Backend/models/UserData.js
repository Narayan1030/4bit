import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        unique: false   
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    compname:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
export default User