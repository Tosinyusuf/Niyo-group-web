import styled from "styled-components";
import job from "../../assets/careers/career-block-3.svg"
import breakpointSizes from "../../constants/breakpointSizes";

export const JobContainer = styled.div`
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${job});
    width: 100%;
    background-size:cover ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    height:80vh ;
    background-attachment:fixed ;
    h1{
        font-size:60px;
        font-family:AtypDisplay-Bold ;
        margin-bottom:0 ;
    }
    p{
        font-family:Light;
        color:#fff;
        text-align:center ;
        font-size:16px ;
    }

    @media ${breakpointSizes.mobile} {
        padding:0 20px ;
        height:60vh;
      h1{
        font-size:30px; ;
      }
      p{
        text-align:left ;
        font-size:14px;
      }
    }

    @media ${breakpointSizes.desktop} {
    }
    
`

export const DetailsContainer = styled.div`
    padding:30px 150px;
    height:auto;
    background-color:#070909 ;
    h2{
        font-size:35px;
        font-family:AtypDisplay-Bold ;
        margin-bottom:10px ;
    }
    p{
        font-family:Light;
        color:#fff;
        font-size:16px ;
        a{
            color:#FBAF00;
            font-family:semibold;
        }
    }

    ul{
        padding-left:15px ;
        
        li{
            font-size:16px;
            margin-bottom:10px;
            color:#fff;
            font-family:Light;
        }
    }

    @media ${breakpointSizes.mobile} {
        padding:30px 20px ;
      h2{
        font-size:20px; ;
      }
      p{
        font-size:14px;
      }
      ul li{
        font-size:14px ;
      }
    }

    @media ${breakpointSizes.desktop} {
        padding:50px 250px;
    }
    
`