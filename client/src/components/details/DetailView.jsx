import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productAction';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography,styled } from '@mui/material';
import Actionitem from './Actionitem';
import ProductDetail from './ProductDetail';
const Component=styled(Box)`
  background:#f2f2f2;
  margin-top:55px;
`
const Container=styled(Grid)`
   background:#ffffff;
   display:flex;
`
const RightContainer=styled(Grid)`
  margin-top:50px;
  padding-left:25px;
  & > p{
    margin-top:10px;
  }
`

const DetailView = () => {
 const dispatch=useDispatch();
 const {id}=useParams();
 const {loading,product}=useSelector(state=>state.getProductDetails);
 useEffect(()=>{
    if(product && id!==product.id)
    dispatch(getProductDetails(id))
 },[dispatch,loading,product,id])

 
return (
     <Component>
       {
          product && Object.keys(product).length &&
          <Container container>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Actionitem product={product}/>
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                <ProductDetail product={product}/>
            </RightContainer>
          </Container>
      }
     </Component>
  )
}

export default DetailView;