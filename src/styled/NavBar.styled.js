import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

export const StyledNavBar = styled.div`
.nav{
  width: 100%;
  height: 91px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: semibold;
  background-color: #070909;
  color: #fff;

  padding: 0 150px;

  @media ${breakpointSizes.mobile} {
    height: 10vh;
    padding: 0 20px;
  }
  @media ${breakpointSizes.desktop} {
    height: 10vh;
    padding: 0 250px;
  }

  .nav-logo-container {
    width: 20%;

    @media ${breakpointSizes.mobile} {
      display: flex;
      width: 100%;
    }
  }

  .nav-logo {
    height: 40px;

    @media ${breakpointSizes.mobile} {
      height: 30px;
    }
  }

  .nav-menu {
    background-color: #000;
    width: 100%;
    height: 100vh;
    padding-top: 30px;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    text-align: center;
    /* padding-top: 70px; */

    .cancel {
      float: right;
      margin-right: 30px;
      margin-top: -20px;
    }

    a {
      color: #fff;
      text-decoration: none;
      display: block;
      font-size: 16px;
      font-family: regular;
      text-align: left;
      width: 100%;
      margin-left: 30px;
      margin-top: 30px;
      img {
        width: 20px;
        margin-right: 10px;
        margin-bottom: -5px;
      }
      span {
        margin-top: -3px;
      }
    }
    button {
      height: 40px;
      border-radius: 20px;
      width: 145px;
      font-size: 12px;
      border-radius: 15px;
      margin-top: 35px;
    }
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  .nav-link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    @media ${breakpointSizes.mobile} {
      display: none;
    }
  }

  .nav-link {
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    transition:ease-in;
  }
  .nav-link:hover{
    background: linear-gradient(180deg, #ff6fd8 0%, #f39200 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
  }

  // Keep styling for navigation
  /* .nav-link:first-child {
    border-bottom: 2px solid #fbaf00;
  } */

  .nav-button {
    background-color: #fff;
    color: #070909;
    height: 50px;
    border-radius: 20px;
    width: 164px;
    font-family: semibold;
  }
}

.active{
  position:fixed ;
  top:0;
  z-index:9999;
  filter:grayscale(0.1) ;
}
`;
