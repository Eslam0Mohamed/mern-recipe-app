import express, { response } from "express"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'
import recipeRouter from "./Routes/recipe.router.js"
import userRouter from "./Routes/auth.router.js"
import { connectDB } from "./connectDB/connectdb.js"
const app = express()
dotenv.config()
connectDB()

 const port = process.env.PORT || 5000

 app.use(cors())

 app.use(express.json())
 app.use(express.static('public'))
 app.use("/recipes",recipeRouter)
 app.use("/auth",userRouter)
 app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  })
})

app.listen(port,()=>{
    console.log("the server is connected on port " + port);
})

