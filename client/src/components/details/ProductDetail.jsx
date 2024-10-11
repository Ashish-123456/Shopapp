import { Typography,Box,styled ,Table,TableBody,TableCell, TableRow} from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText=styled(Box)`
    font-size:14px;
    vertical-allign:baseline;
    &>p{
        font:size:14px;
        margin-top:10px;
    }
`
const Badge=styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00cc00;
    font-size:15px;
`
const ColumnText=styled(TableRow)`
    font-size:14px;
    vertical-allign:baseline;
    &>p{
        font:size:14px;
        margin-top:10px;
        border:'none';
    }
`


const ProductDetail = ({product}) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
 const date=new Date(new Date().getTime()+(5*24*60*60*1000));
 const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
 return (
    <>
        <Typography>{product.title.longTitle}</Typography>
        <Typography style={{margin:5,color:'#878787',fontSize:14}}
            >8 Ratings & 1 Reviews
            <Box component="span"><img src="" alt="Sassured_img" style={{width:77,marginLeft:20}}/></Box>
        </Typography>
        <Typography>
                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available offers</Typography>
        <SmallText>
            <Typography><Badge/>Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><Badge/>Special PriceGet extra 3% off (price inclusive of cashback/coupon) T&C</Typography>
            <Typography><Badge/>Buy for 150 get ₹100 off your Next Buy T&C</Typography>
            <Typography><Badge/>No cost EMI ₹6,666/month. Standard EMI also available  View Plans</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight:600}}>Delivered by {date.toDateString()} || ₹40  </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                    <TableCell>No Warranty </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Seller</TableCell>
                    <TableCell >
                        <Box component={"span"} style={{color:'#2874f0'}} >SuperComNet</Box>
                        <Typography>Gst invoice available</Typography>
                        <Typography>View more sellers from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2}>
                    <img src={adURL} alt='coin_img' style={{width:390}}/>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color:'#878787'}}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>

  )
}

export default ProductDetail