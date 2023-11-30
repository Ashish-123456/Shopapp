import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { Box,styled } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getProducts as listProducts} from '../../redux/actions/productAction';
const Component=styled(Box)`
    background:#F2F2F2;
    padding:10px;
`
const Home = () => {
  const getProducts=useSelector(state=>state.getProducts); //here getProducts is var in store.js which store state in it
  const { products, error } = getProducts;
  console.log("value of products in home.js",products);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(listProducts());   //getProducts is redux actions...
  },[dispatch]);
  return (
    <>
        <NavBar/>
       { <Component>
            <Banner/>
            
            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Season's Top picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/> 
           
        </Component>}
    </>
  )
}

export default Home