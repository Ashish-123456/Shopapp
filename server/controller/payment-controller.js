// import PaytmChecksum from "../paytm/paytmchecksum.js"
import {paytmParams,paytmMerchantKey} from '../index.js';
// import https from 'https';npm start
export const addPaymentGateway=async(req,res)=>{
    try{
        let paymentcheckSum=await PaytmChecksum.generateSignature(paytmParams,paytmMerchantKey);
        let params={
            ...paytmParams,'CHECKSUMHASH':paymentcheckSum
        }
        res.status(200).json(params);
    } catch(error){
        response.status(500).json({error:error.message});
    }

}

export const paytmResponse=()=>{

}