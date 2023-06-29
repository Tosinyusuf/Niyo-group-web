import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledBrands = styled.div`
  background-color: #070709;
  padding-bottom: 100px;

  @media ${breakpointSizes.mobile} {
    padding-bottom: 0%;
    padding-top: 40px;
  }

  .brands-container {
    display: flex;
    flex-direction: column;
    padding: 100px 0 0 150px;
    width: 100%;
    height: auto;

    .brands-description {
      font-family: regular;
      color: #fbaf00;
      width: 245.5px;
      font-size: 16px;

      @media ${breakpointSizes.mobile} {
        font-size: 18px;
        margin-bottom: 0;
      }
    }
    .brands-title {
      width: 484px;
      margin-top: 0;
      margin-bottom: 40px;
      font-family: AtypDisplay-Bold;
      font-size: 30px;
      color: #fff;

      @media ${breakpointSizes.mobile} {
        font-size: 29px;
        margin-bottom: 0;
      }
    }
    @media ${breakpointSizes.mobile} {
      padding: 30px 0 20px 20px;
    }
    @media ${breakpointSizes.desktop} {
      padding: 60px 0 0 250px;
    }
  }

  .brand-cards {
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    color: #fff;
    padding: 0 150px 50px 150px;
    //justify-content: ;
    z-index: 10;

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
      justify-content: center;
      padding: 0 20px 50px 20px;
    }
    @media ${breakpointSizes.desktop} {
      padding: 0 250px;
      height: auto;
    }
  }
  .individual-card {
    background-color: #141414;
    width: 32%;
    border-radius: 15px;
    padding: 20px;
    height: 600px;
    margin-right:30px;
    position: relative;
    @media ${breakpointSizes.mobile} {
      width: 100%;
      height: 600px;
      /* height: 550px; */
      margin-bottom: 40px;
    }
    @media ${breakpointSizes.desktop} {
      width: 30%;
    }
  }
  .card-images {
    height: 200px;
    width: 100%;
    background-size: cover;
    border-radius: 15px;
    position: relative;

    @media ${breakpointSizes.mobile} {
      height: 220px;
    }
  }
  .logo-div {
    position: absolute;
    bottom: -40px;
    width: 100%;
    text-align: center;
  }
  .card-niyo-logo {
    margin: auto;
  }
  .brand-text-container {
    height: 250px;
    margin-top: 50px;

    @media ${breakpointSizes.mobile} {
      height: 30%;
    }

    .one {
      background-color: #f39200;
    }
    .two {
      background-color: #ff6fd8;
    }
    .three {
      background: linear-gradient(180deg, #ff6fd8 0%, #f39200 100%);
    }
  }

  .card-title {
    font-family: AtypDisplay-Bold;
    margin: 0;
    font-size: 26px;
    @media ${breakpointSizes.mobile} {
      font-size: 24px;
    }
  }
  .card-text {
    font-family: regular;

    @media ${breakpointSizes.mobile} {
      font-size: 14px;
      width: 102%;
    }
  }
  .card-button {
    border-radius: 15px;
    border: none;
    font-family: semibold;
    font-size: 16px;
    color: #fff;
    height: 45px;
    position: absolute;
    width: 250px;
    bottom: 50px;
    @media ${breakpointSizes.mobile} {
      height: 45px;
      width: 200px;
      border-radius: 20px;
      font-size: 14px;
    }
  }
`;

export default StyledBrands;
