import styled from "styled-components";
import breakpointSizes from "../../constants/breakpointSizes";

export const CareerHero = styled.div`

margin-top:91px ;
  p {
    font-family: regular;
    font-size: 18px;
    margin-top: 30px;
  }
  @media ${breakpointSizes.mobile} {
    margin-top:64px;
    p {
      font-size: 14px;
      margin-top: 20px;
      padding: 0 20px;
    }
  }
`;

export const CareerImg = styled.div`
  display: flex;
  background-color: #070909;
  justify-content: space-between;
  flex-wrap: wrap;
  .career-image {
    background-position: center;
    background-size: cover;
    border-radius: 10px;
  }
  .left,
  .right {
    width: 49%;
  }
  .left {
    .left-top-image-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .image-left-top {
        width: 49%;
        height: 200px;
      }
    }
    .left-bottom-image-container {
      height: 180px;
      margin-top: 20px;
    }
  }
  .right {
    height: 400px;
  }
  @media ${breakpointSizes.mobile} {
    .left,
    .right {
      width: 100%;
    }
    .right {
      display: none;
    }
  }
`;

export const CareerEmpower = styled.div`
  p {
    font-family: regular;
    font-size: 18px;
    margin-top: 30px;
  }
  @media ${breakpointSizes.mobile}{
    h1{
        font-size:30px ;
        padding: 0 20px;
    }
    p {
      font-size: 14px;
      margin-top: 20px;
      padding: 0 20px;
    }
    .empower{
      padding:60px 0;
    }
  }
`;

export const CareerBenefits = styled.div`
  .contain {
    padding: 0 150px;
    .benefits {
      margin-top: 40px;
      .benefit-card {
        img {
          width: 70px;
        }
      }
    }
  }
  @media ${breakpointSizes.mobile} {
    p{
      text-align:left ;
      padding-left:20px;
    }
    h1{
        font-size:30px ;
        padding:0 20px;
        text-align:left ;
    }
    .contain {
      padding: 0 0px;
      .benefit-card{

      }
    }
  }
`;

export const JobVacant = styled.div`
  
  @media ${breakpointSizes.mobile} {
    text-align:center ;
    select{
        margin:auto ;
    }
    p {
      font-size: 14px;
      margin-top: 20px;
      padding: 0 20px;
    }
  }
`;