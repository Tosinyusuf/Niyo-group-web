import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

export const StyledNavBar = styled.div`
  width: 100%;
  height: 91px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: semibold;
  background-color: #070909;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    height: 10vh;
  }

  .nav-logo-container {
    width: 40%;
    text-align: center;
    padding: 0 100px 0 0;

    @media ${breakpointSizes.mobile} {
      display: flex;
      width: 100%;
    }
  }

  .nav-logo {
    height: 6.5vh;

    @media ${breakpointSizes.mobile} {
      height: 5vh;
    }

    @media ${breakpointSizes.mobile} {
      padding-left: 10%;
    }
  }

  .nav-link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    right: 10%;

    @media ${breakpointSizes.mobile} {
      display: none;
    }
  }

  .nav-link {
    margin: 0 1%;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
  }

  // Keep styling for navigation
  /* .nav-link:first-child {
    border-bottom: 2px solid #fbaf00;
  } */

  .nav-button {
    background-color: #fff;
    color: #070909;
    height: 6.5vh;
    border-radius: 20px;
    width: 164px;
    height: 55px;
    font-family: semibold;
  }
`;
