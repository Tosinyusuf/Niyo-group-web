import styled from "styled-components";
import heroImage from "../assets/hero-image.jpeg";
import breakpointSizes from "../constants/breakpointSizes";

export const StyledHeroSection = styled.div`
  background-image: url(${heroImage});
  background-size: 100% 100%;
  background-size: cover;
  background-position: center;
  height: 120%;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  align-items: center;

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
    //border:1px solid #fff;

    @media ${breakpointSizes.mobile} {
      height: 80%;
    }
  }

  .hero-text:before {
    display: block;
    width: 160px;
    content: "";
    border-top: 3px solid #fbaf00;
    z-index: 2;

    @media ${breakpointSizes.mobile} {
      width: 108px;
    }
  }

  .hero-text {
    z-index: 2;
    color: #fff;
    /* width: 1045px; */
    width: 74%;
    height: 140px;
    font-family: AtypDisplay-Bold;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;

    @media ${breakpointSizes.mobile} {
      width: 90%;
      font-size: 40px;
      /* padding: 70% 0; */
      line-height: 56px;
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
