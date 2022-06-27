import styled from "styled-components";

export const StyledNavBar = styled.div`
  width: 100%;
  height: 91px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: semibold;
  background-color: #070909;
  color: #fff;

  .nav-logo-container {
    width: 40%;
    text-align: center;
    padding: 0 100px 0 0;
  }

  .nav-logo {
    height: 6.5vh;
  }

  .nav-link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    right: 10%;
  }

  .nav-link {
    margin: 0 1%;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
  }

  .nav-link:first-child {
    border-bottom: 2px solid #fbaf00;
  }

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
