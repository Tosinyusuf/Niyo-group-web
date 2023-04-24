import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledOpenRoles = styled.div`
  height: 90%;
  background-color: #070909;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: semibold;

  @media ${breakpointSizes.mobile} {
    padding: 0 5% 50px 5%;
    align-items: flex-start;
    height: auto;
  }

  @media ${breakpointSizes.desktop} {
  }

  .roles-description {
    color: #fbaf00;
    font-size: 20px;
  }

  .roles-title {
    margin: 0;
    font-family: AtypDisplay-Bold;
    line-height: 60px;
    font-size: 60px;
    padding-bottom: 20px;

    @media ${breakpointSizes.mobile} {
      font-size: 35px;
      line-height: 30px;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .roles-text {
    width: 40%;
    text-align: center;
    font-size: 17px;
    font-family: regular;
    padding-bottom: 26px;

    @media ${breakpointSizes.mobile} {
      width: 100%;
      text-align: left;
      font-size: 14px;
      padding-bottom: 0;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .roles-button {
    border: none;
    border-radius: 20px;
    background-color: #fff;
    color: #070909;
    height: 50px;
    width: 170px;
    font-family: semibold;
    font-size: 14px;
  }

  .roles-button:hover {
    background-color: #fbaf00;
    color: #fff;
  }
`;

export default StyledOpenRoles;
