import styled from "styled-components";
import breakpointSizes from "../../../constants/breakpointSizes";

export const PressContainer = styled.div`
  padding: 20px 150px;
  height: auto;

  background-color: #070909;
  .react-multi-carousel-dot-list {
    margin-top: 50px !important;
    z-index: 8;
  }
  .each-press {
    background-color: #141414;
    padding: 30px;
    text-align: left;
    height: 460px;
    border-radius: 20px;
    position: relative;
    margin-right: 30px;
    h2 {
      font-family: semibold;
      line-height: 25px;
      font-size: 20px;
      margin-top: 15px;
    }
    p {
      font-family: Light;
      color: #fff;
    }
    a {
      color: #fff;
      font-family: Light;
      bottom: 30px;
      left: 30px;
      position: absolute;
      text-decoration: underline;
    }
  }
  @media ${breakpointSizes.mobile} {
    padding: 0px 20px 50px 20px;
    .each-press {
      margin-right: 0;
      padding: 30px 15px;
      height: 400px;
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 14px !important ;
      }
      a {
        left: 15px;
      }
    }
  }
  @media ${breakpointSizes.desktop} {
    padding: 20px 250px;
  }
`;
