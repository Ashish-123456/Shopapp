import Express from "express";
import { Connection } from "./database/db.js";
import DefaultData from "./default.js"
import dotenv from "dotenv";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser"
// import uuid from 'uuix';

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

// export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
// export let paymentParams={};
// paymentParams['MID']=process.env.PAYTM_MID;
// paymentParams['WEBSITE']=process.env.PAYTM_WEBSITE;
// paymentParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
// paymentParams['INDUSTRY_TYPE_ID']=process.env.PAYMENT_INDUSTRY_TYPE;
// paymentParams['CUST_ID']=process.env.PAYTM_CUST_ID;
// paymentParams['TXN_AMOUNT']='100';
// paymentParams['CALLBACK_URL']='http://localhost:8000/callback';
// paymentParams['EMAIL']='ashish@123';
// paymentParams['MOBILE_NO']='1234567890';
