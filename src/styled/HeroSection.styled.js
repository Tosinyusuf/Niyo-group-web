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
    height: 120vh;
  }

  .hero-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 100%;
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
      width: 80%;
      font-size: 50px;
      /* padding: 70% 0; */
      line-height: 56px;
    }
  }

  span {
    color: #fbaf00;
  }
`;
