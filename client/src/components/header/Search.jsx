// import styled from '@emotion/styled'
import { InputBase,Box ,styled,  List ,ListItem} from '@mui/material'
import React, { useState ,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link, useNavigate } from 'react-router-dom';
const StyleSearch=styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px ;
    margin-bottom:7px;
    display:flex;
` 
const Inputfeild=styled(InputBase)`
    margin-left:20px;
    width:100%;
    font-size : 'unset';
`
const SearchIconstyle=styled(SearchIcon)`
    color:blue;
    padding:5px;
    margin-left:70px;
    display: flex;
`
const ListWrapper=styled(List)`
    position:absolute;
    background:#FFFFFF;
    color:#000;
    margin-top:36px;
`
const Search = () => {
    const [text,setText]=useState('');
    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    // const navigate=useNavigate();
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    const getText=(text)=>{
        setText(text);
    }

return (
    <StyleSearch>
        <Inputfeild
            placeholder='Search for products , brands and more'
            onChange={(e)=>getText(e.target.value)}
            //  value={text}
        />
        <Box>
            <SearchIconstyle />
        </Box>
        {
            
            text &&
            <ListWrapper>
                {
                    
                    products.filter(product => product.title.longTitle.toLowerCase().
                    includes(text.toLowerCase())).map(product=>(
                        <ListItem>
                        {product.title.longTitle}
                        </ListItem>
                ))
                }
            </ListWrapper>
        }
    </StyleSearch>
  )
}

export default Search

{/* <Link  */}
                            {/* // to={`/product/product.2`}
                            //     onClick={setText('')}
                            // style={{textDecoration:'none',color:'inherit'}}
                            // >  */}
                            
                            
                         {/* </Link> */}
 {/* <ListItem onClick={()=>{navigate(`/product/${product.id}`)}}> */}
                       