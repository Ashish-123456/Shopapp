import Product from "./models/product-schema.js"
import {products} from "./constants/data.js"


const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log("Data importeed Successfully");
    }catch(error){
        console.log(`Error while Inserting Product`,error.message);
    }
}

export default DefaultData;