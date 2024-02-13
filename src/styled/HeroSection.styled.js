import styled from "styled-components";
import heroImage from "../assets/hero-image.jpeg";
import breakpointSizes from "../constants/breakpointSizes";

export const StyledHeroSection = styled.div`
  background-image:linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${heroImage});
  background-size: 100% 100%;
  background-size: cover;
  background-position: center;
  height: 100%;
  padding-top: 10%;

  @media ${breakpointSizes.mobile} {
    background-position: 60%;
    height: 90%;
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:70vh ;
    margin:auto;

    .brands{
      display:flex;
         a{
          margin-left:25px;
         
      img{
          height: 50px;
          :hover{
            transform:translateY(-3px);
            transition:ease-in .3s;

          }
      }
    }
    }
   
  
    //border:1px solid #fff;

    

    p{
      color:#fff;
      font-family: Regular;
      font-size:24px;
      margin-top: -60px;text-align:center;
    }
    button{
      width:200px;
      height:50px;
      border-radius:25px;
      font-family: AtypDisplay-Bold;;
      color:#000;
    }

    @media ${breakpointSizes.mobile} {
      height: 100%;
      p{
        margin-top:-20px;
        font-size:18px;
      }
    }
  }

 

  .hero-text {
    z-index: 2;
    color: #fff;
    /* width: 1045px; */
    width: 80%;
    height: auto;
    font-family: AtypDisplay-Bold;
    font-style: normal;
    font-weight: 400;
    text-transform:uppercase;
    font-size: 90px;
    line-height:90px;
    text-align: center;
    /* background: linear-gradient(180deg, #ff6fd8 0%, #f39200 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent; */
 

    @media ${breakpointSizes.mobile} {
      width: 98%;
      height:auto;
      font-size: 50px;
      /* padding: 70% 0; */
      line-height: 50px;
    }
  }

  .slide {
    .word-ani {
      .word:nth-child(1) {
        color: #fbaf00;
      }
      .word:nth-child(2) {
        background: linear-gradient(180deg, #ff6fd8 0%, #f39200 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .word:nth-child(3) {
        color: #ff6fd8;
      }
    }
  }

  .hero-scroll {
    display: none;
    height: auto;

    @media ${breakpointSizes.mobile} {
      display: flex;
      padding: 22% 0;
      justify-content: center;
    }
  }
`;
