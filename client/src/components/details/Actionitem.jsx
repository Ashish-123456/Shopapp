import React,{useState} from 'react'
import {Box,Button,styled} from '@mui/material';
// import {ShoppingCartIcon  ,FlashOnIcon  }from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../services/api';
import { post } from '../utils/paytm';

const LeftContainer=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px ',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }  
}));
const Image=styled('img')({
    marginRight:'5px',
    
})

const StyledButton=styled(Button)(({theme})=>({
    width:'50%',
    height:50,
    borderRadius:2,
    marginTop:10,
    [theme.breakpoints.down('md')]:{
        marginLeft:5,
         width:'30%',
         fontSize:'7||important',
        padding:'45px 35px'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48',
    }
})); 


const Actionitem = ({product}) => {
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const[quantity,setQuantity]=useState(1);
    const {id}=product;
    
    const addItemToCart=()=>{
        // console.log("additem",product);
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    const buyNow=async()=>{
        let response=await payUsingPaytm({amount:599,email:'ashish@gmail.com'});
        let information={
            action:'https://securegw-stage.paytm.in/order/process',
            params:response
        }
        post(information);
    }


  return (
    <LeftContainer>
   
        <Box style={{padding:'15px 20px',border:'1px solid #f0f0f0',width:'90%'}}>
        <Image src={product.detailUrl} alt='product_detail_url'/></Box>
        <Box style={{display:'flex'}}>
        <StyledButton onClick={addItemToCart}  variant="conatined" style={{marginRight:10,background:'#ff9f00'}}>
            <ShoppingCartIcon color="action" />Add to Cart</StyledButton>
        <StyledButton variant="conatined" style={{background:'#fb541b'}}>
            <FlashOnIcon onClick={()=>buyNow()} color="success"/>Buy Now</StyledButton>
        </Box>
    </LeftContainer>
  )
}

export default Actionitem