import mongoose , {Schema, Document}from "mongoose"

export interface Message extends Document{
    content:string;
    createdAt:Date
}

const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})


export interface User extends Document{
    userName:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified : boolean
    isAcceptingMessage:boolean;
    messages:Message[]
}


const UserSchema:Schema<User> = new Schema({
userName:{
    type:String,
    required:[true, "username is required"],
    trim:true,
    unique:true,
    match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"please use a valid email address"]
}
,
email:{
 type:String,
 required:[true,"email is required"],
 unique:true,

},
password:{
    type:String,
    required:[true, "password is required"],
    min:8
    
},
verifyCode:{ 
    type:String,
    required:[true, "verifyCode is required"],



},
verifyCodeExpiry:{
    type:Date,
    required:[true, "password is required"],

},
isVerified:{
    type:Boolean,
    default:false
},
isAcceptingMessage:{
    type:Boolean,
    default:false
},
messages:[MessageSchema]
})


const UserModel = (mongoose.model.User as mongoose.Model<User>)
|| mongoose.model<User>("User",UserSchema)

export default UserModel;