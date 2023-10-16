import mongoose from 'mongoose';
const { Schema } = mongoose;

const signupUsersModule = new Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    password:{
        type:String,
        required:true,
        unique : true
    },
  
    isAdmin:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
});
export default mongoose.model("signupUser",signupUsersModule)