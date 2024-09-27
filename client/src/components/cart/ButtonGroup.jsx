import { ButtonGroup,Button,styled } from "@mui/material"
import { useEffect, useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../redux/actions/cartActions"

const Component=styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton=styled(Button)`
    border-radius:50%;

`

const GroupedButton = ({item}) => {
  const dispatch =useDispatch();
  const {product}=useSelector(state=>state.getProductDetails);
  const [quantity,SetQuantity]=useState(1);
  const IncQuantity=()=>{
    // console.log("item in Button",item.quantity);
    // console.log("product in Button",product);
    if(product.quantity>quantity)SetQuantity(quantity+1);
    else {
      SetQuantity(quantity);
      console.log("Currently Not Available product");
    }
  }
  const DecQuantity=()=>{
    if(quantity>1)SetQuantity(quantity-1);
     else SetQuantity(quantity);
  }

  useEffect(()=>{
    dispatch(addToCart(item.id,quantity));
  },[quantity])
  return (
    <Component>
        <StyledButton onClick={DecQuantity}>-</StyledButton>
        <StyledButton>{quantity}</StyledButton>
        <StyledButton onClick={IncQuantity}>+</StyledButton>
    </Component>
  )
}

export default GroupedButton