import {useState,React,useContext} from 'react'
import {Box, Button, Typography,styled,Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import  {DataContext } from '../../context/DataProvider'
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    '& > *':{
        marginRight:'40px||important',
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

const Container=styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    // [theme.breakpoints.dowm('md')]:{
    //     display:'block',
    // }
}));


const CustomButtons = () => {
 const [open,setOpen]=useState(false);
 const { account,setAccount } = useContext(DataContext);

 const openDialog=()=>{
    setOpen(true);
 }

 const {Cartitems}=useSelector(state=>state.cart);
 
  return (
    <Wrapper>
        {
            account ?   <Profile account={account} setAccount={setAccount}  /> :
            <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
        }
        <Typography style={{marginTop:5 ,width:150,marginLeft:10}}>Become a Seller</Typography>
        <Typography style={{marginTop:5}}>More</Typography>
        <Container to='/cart'>
           <Badge badgeContent={Cartitems?.length} color="secondary">
            <ShoppingCartIcon />
            <Box style={{marginLeft:10}} >Cart</Box>
            </Badge>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons