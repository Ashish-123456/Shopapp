import mongoose from "mongoose";

export const Connection=async(username,password)=>{
     const Url=`mongodb+srv://${username}:${password}@cluster0.jgliqmv.mongodb.net/ashish`
    // const Url='mongodb://0.0.0.0:27017';
    try{
       await mongoose.connect(Url,{});
       console.log("DB connected Successfully");
    }catch(error){
        console.log(`Error while Connecting`,error.message);
    }
}