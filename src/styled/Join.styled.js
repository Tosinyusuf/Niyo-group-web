import styled from "styled-components";
import empoweredImage from "../assets/empowered-image.svg";

const StyledJoin = styled.div`
  /* background-color: green; */
  background-image: url(${empoweredImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .join-title:before {
    display: block;
    width: 90px;
    content: "";
    border-top: 3px solid #fbaf00;
    z-index: 2;
    font-family: AtypDisplay-Bold;
  }

  .join-title {
    font-family: AtypDisplay-Bold;
    color: #fff;
    font-size: 40px;
    margin: 0;
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
  }

  .join-form-label {
    display: flex;
    flex-direction: column;
    align-items: center;

    .join-email {
      background-color: #fff;
      color: #afafaf;
      border: none;
      margin: 20px 0;
    }

    .join-submit {
      background-color: #070909;
      color: #fff;
      border: none;
    }

    .join-button {
      width: 50vw;
      height: 50px;
      font-family: regular;
      font-size: 20px;
    }
  }
`;

export default StyledJoin;
