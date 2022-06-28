import styled from "styled-components";
import missionImage from "../assets/mission-image.svg";
import breakpointSizes from "../constants/breakpointSizes.js";

const StyledMission = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #070909;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    height: 780px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .mission-image-container {
    background-image: url(${missionImage});
    position: relative;
    width: 50vw;
    height: 110vh;
    top: -60px;
    background-size: 600px 1260px;
    background-size: cover;
    background-position: center;
    z-index: 10;

    @media ${breakpointSizes.mobile} {
      order: 2;
      height: 50%;
      width: 80vw;
      height: 72vw;
      border-radius: 20px;
      top: 80px;
    }
  }

  .mission-right-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;

    @media ${breakpointSizes.mobile} {
      height: 50%;
      flex-direction: column;
      height: 40%;
      padding-bottom: 94px;
    }
  }

  .mission-description {
    font-family: regular;
    color: #fbaf00;
    height: 26px;
    font-size: 14px;

    @media ${breakpointSizes.mobile} {
      padding: 0 0 24px 0;
      /* padding: 18px 0 24px 0; */
      font-size: 18px;
    }
  }

  .rectangle {
    align-self: center;
    width: 70px;
    margin: 0 2% 0 0;

    @media ${breakpointSizes.mobile} {
      width: 16%;
    }
  }

  .mission-title {
    width: 370px;
    height: 90px;
    align-self: center;
    font-family: AtypDisplay-Bold;
    font-size: 30px;
    line-height: 36px;
    margin: 0 0 14% 0;
  }

  .mission-text {
    width: 30vw;
    font-family: regular;
    font-size: 20px;
    line-height: 25px;

    @media ${breakpointSizes.mobile} {
      width: 90%;
    }
  }

  .mission-button {
    margin: 32px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    color: #fbaf00;
    background: none;
    cursor: pointer;
    text-decoration: underline;
    border: none;
    font-size: 19px;
    font-family: regular;
  }

  .arrow {
    box-sizing: border-box;
    margin-left: 42%;
  }
`;

export default StyledMission;
