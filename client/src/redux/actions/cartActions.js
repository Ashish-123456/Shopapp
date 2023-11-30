import axios from "axios"
import * as actionType from '../constants/cartConstants';
const url='http://localhost:8000';


export const addToCart=(id,quantity)=>async(dispatch)=>{
    try{
        let {data} = await axios.get(`${url}/product/${id}`);
        dispatch({type:actionType.ADD_TO_CART,payload:{...data,quantity}});
    }catch(error){
        dispatch({type:actionType.ADD_TO_CART_ERROR,payload:error.message})
    }
}


//No required for try catch bcz it doesn't have to call any api. 
export const removedToCart=(id)=>(dispatch)=>{
    dispatch({type:actionType.REMOVE_FROM_CART,payload:id});
}