import styled from "styled-components";
import heroImage from "../assets/hero-image.svg";
import breakpointSizes from "../constants/breakpointSizes";

export const StyledHeroSection = styled.div`
  background-image: url(${heroImage});
  background-size: 100vw 100vh;
  background-size: cover;
  background-position: center;
  height: 120vh;

  @media ${breakpointSizes.mobile} {
    height: 90vh;
    background-position: 60%;
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100%;
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
    width: 1045px;
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
`;
