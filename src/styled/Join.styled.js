import styled from "styled-components";
import empoweredImage from "../assets/empowered-image.svg";
import breakpointSizes from "../constants/breakpointSizes";

const StyledJoin = styled.div`
  background-image: url(${empoweredImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakpointSizes.mobile} {
    height: 400px;
  }

  .join-title:before {
    display: block;
    width: 90px;
    content: "";
    border-top: 3px solid #fbaf00;
    z-index: 2;
    font-family: AtypDisplay-Bold;

    @media ${breakpointSizes.mobile} {
      display: none;
    }
  }

  .join-title {
    font-family: AtypDisplay-Bold;
    color: #fff;
    font-size: 40px;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      font-size: 30px;
    }
  }

  span {
    color: #fbaf00;
  }

  .join-text {
    font-family: regular;
    width: 24%;
    text-align: center;
    margin: 10px 0 20px;
    color: #fff;

    @media ${breakpointSizes.mobile} {
      width: 50vw;
      font-size: 15px;
      font-family: Light;
    }
  }

  .join-form{
    width:100%;
    text-align:center ;

  }
    .join-email {
      background-color: #fff;
      color: #afafaf;
      border: none;
      margin: 20px 0;

      @media ${breakpointSizes.mobile} {
        margin: 10px 0 20px 0;
      }
    }

    .join-submit {
      background-color: #070909;
      color: #fff;
      border: none;
    }

    .join-button {
      width: 40%;
      height: 50px;
      border-radius: 10px;
      font-family: regular;
      font-size: 20px;
      padding-left: 22px;

      @media ${breakpointSizes.mobile} {
        /* border-radius: 0; */
        width: 70%;
        height: 36px;
        font-size: 16px;
      }
      @media ${breakpointSizes.desktop} {
        /* border-radius: 0; */
        width: 30%;
      }
    }
  
`;

export default StyledJoin;
