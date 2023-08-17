import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/userRoutes.js"

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/',userRoutes)

const PORT = 5000;
app.listen(PORT,()=>console.log(`App is listening on PORT : ${PORT}`));

mongoose.connect(process.env.CONNECTION_URL);
const db = mongoose.connection
db.on("error",(err)=>console.log(err))
db.once("open",()=>console.log("Connected to Db"));
