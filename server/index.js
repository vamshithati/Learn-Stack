import express from "express";
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config({})

connectDB()

const app=express();

const PORT=process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:8080",
    credentials:true
}))

app.use("/api/v1/user", userRoute);

app.get("/home", (_,res)=> {
    res.status(200).json({
        success:true,
        message:"Backend message"
    })
})

app.listen(PORT, ()=> {
    console.log(`server listen at port ${PORT}`);
})