import {useState,React,useContext} from 'react'
import {Box, Button, Typography,styled,Badge} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import  {DataContext } from '../../context/DataProvider'
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    '& > *':{
        marginRight:'30px !important',
        textDecoration:'none',
        color:'#ffffff',
        fontSize:14,
        alignItem:'center',
        [theme.breakpoints.down('md')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('md')]:{
        display:'Block',
    }
}))
const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

// Real....
const Container=styled(Link)`
    display:flex,
    flexDirection:'row',
    textDecoration:'none',
    color:'inherit'
    `

// // Edited Error for link
// const Container=styled(Box)`
//     display:flex,
//      flexDirection:'row',
//      textDecoration:'none',
//      color:'inherit'
//      `

const CustomButtons = () => {
 const [open,setOpen]=useState(false);
 const { account,setAccount } = useContext(DataContext);
 const openDialog=()=>{
    setOpen(true);
 }
 const {cartItems}=useSelector(state=>state.cart);
 
  return (
    <Wrapper>
        {
            account ?   <Profile account={account} setAccount={setAccount}  /> :
            <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
        }
        <Typography style={{marginTop:5 ,width:150,marginLeft:10}}>Become a Seller</Typography>
        <Typography style={{marginTop:5}}>More</Typography>
        {/* <Container to="/cart" onClick={movetocart}> */}
        <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCart/>
        </Badge>
        <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons