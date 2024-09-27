import { imageURL } from '../constants/data'
import { Grid,styled } from '@mui/material'
// import  url  from "E:\PROJECTS\images\covid_img.jpg"
const Wrapper=styled(Grid)`
  margin-top:10px;
  justify-content:space-between;
`
const Image=styled('img')((theme)=>({
    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints&&theme.breakpoints.down('md')]:{
      ObjectFit:'cover',
      height:120
    }
}));
const MidSection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
    <Wrapper lg={12} sm={12} md={12} xs={12} container>
     {
        imageURL.map(image=>(
       <Grid item lg={4} sm={12} md={4} xs={12}>
       <img style={{margin:5}}src={image} alt='MidSection_img' style={{width:'100%'}}/>
       </Grid>
       ))
     }
    </Wrapper>
    <Image src={url} alt='covid_img'/>
</>
  )
}

export default MidSection