import axios from "axios";
import * as actionType from '../constants/productConstants'

const url='http://localhost:8000';
//...dispatch act as middleware predoduct reducer



export const  getProducts=()=>async(dispatch)=>{
    try{
       let {data}= await axios.get(`${url}/products`);
    //    console.log("data in productAction.js",data);
       dispatch({type:actionType.Get_PRODUCT_SUCCESS , payload:data});

    }catch(error){
        // console.log(`Error while getting products`,error.message);
        dispatch({type:actionType.Get_PRODUCT_FAIL,payload:error.message});
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionType.Get_PRODUCT_DETAILS_REQUEST});
        let {data}= await axios.get(`${url}/product/${id}`);
        dispatch({type:actionType.Get_PRODUCT_DETAILS_SUCCESS, payload:data});

    }catch(error){
        dispatch({type:actionType.Get_PRODUCT_DETAILS_FAIL,payload:error.message})
    }
}