import Express from "express";
import { Connection } from "./database/db.js";
import DefaultData from "./default.js"
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser"


const Port=8000;
const app=Express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);
app.listen(Port,()=>console.log(`server is running on ${Port}`));
DefaultData();
