import React,{useState} from 'react'
// import styled from '@emotion/styled';
import {AppBar,Box,IconButton,Toolbar,Typography,styled,Drawer,List,ListItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';
import CustomButtons from './CustomButtons';
// import { Link } from 'react-router-dom';


const StyledHeader=styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Component=styled(Box)`
    margin-left:12%;
`
const SubHeading=styled(Typography)`
    font-size:10px,
    font-style:italic;
`
const PlusImage=styled('img')({
    width:10,
    height:10
})
const CustomButtonWrapper=styled(Box)(({theme})=>({
    display:'flex',
    marginLeft:10,
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));
const StyledIconButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))
const Header = () => {
    const logoUrl= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }


return (
    <StyledHeader >
        <Toolbar>
         <StyledIconButton  color='inherit' onClick={handleOpen}>
            <MenuIcon />
         </StyledIconButton>
         <Drawer open={open} onClose={handleClose}>
            <Box style={{width:200}} onClose={handleClose}>
                <List button >
                <ListItem >
                <CustomButtons/>
                </ListItem>
                </List>
            </Box>
         </Drawer>
            <Component>
                <img  scr={logoUrl} alt='logo' style={{width:75}} />
                 <Box style={{display:'flex'}} >
                 <SubHeading >Explore
                 <Box component='span' style={{color:'yellow'}}>Plus</Box>
                 </SubHeading>
                 <PlusImage scr={subURL} alt='+' />
                 </Box>
            </Component>
             <Search/>
            <CustomButtonWrapper>
             <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header