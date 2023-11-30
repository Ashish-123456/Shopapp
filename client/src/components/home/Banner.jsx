import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../constants/data";
import styled from "@emotion/styled";

const Image=styled('img')(({theme})=>({
  width:'100%',
  height:'200',
 [theme.breakpoints&&theme.breakpoints.down('md')]:{
    ObjectFit: 'cover',
    height:120,
  }
}));
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


   
const Banner = () => {
  return (
    <Carousel 
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
    {
        bannerData.map(data=>(
            <Image src={data.url} alt="banner_img"/>
        ))
    }

    </Carousel>
  )
}

export default Banner