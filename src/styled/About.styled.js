import styled from "styled-components";
import heroImage from "../assets/aboutImage.jpeg";

import breakpointSizes from "../constants/breakpointSizes";

export const StyledAbout = styled.div`
  background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center ;
  color: #fff;
  margin-top:91px ;
  font-family: AtypDisplay-Bold;

  @media ${breakpointSizes.mobile} {
    height: 90%;
    background-position:60% ;
    margin-top:64px;
  }


  @media ${breakpointSizes.desktop} {
  }

  .about-title {
    font-size: 60px;
   // padding-bottom: 100px;
    line-height: 70px;

    @media ${breakpointSizes.mobile} {
      font-size: 48px;
      padding: 0% 4% 0% 4%;
      line-height: 50px;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .about-title:before {
    display: block;
    width: 160px;
    content: "";
    border-top: 3px solid #fbaf00;
  }

  .about-scroll {
    height: 80px;
    padding-bottom: 20px;

    @media ${breakpointSizes.mobile} {
      height: 60px;
      margin-bottom: 10%;
    }

    @media ${breakpointSizes.desktop} {
    }
  }
`;

export default StyledAbout;
