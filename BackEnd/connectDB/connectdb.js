import mongoose from "mongoose";

export function connectDB(){
    mongoose.connect(process.env.mongoUri)
    .then(() => {
      console.log("connected to mongoDB");
    })
    .catch((err) => {
      console.log("error From mongoDB " + err);
    });
    
}