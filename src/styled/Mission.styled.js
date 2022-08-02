import styled from "styled-components";
import missionImage from "../assets/mission-image.svg";
import breakpointSizes from "../constants/breakpointSizes.js";
import backgroundLine2 from "../assets/background/background-line-2.png";

const StyledMission = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #070909;
  background-image: url(${backgroundLine2});
  background-position: right;
  background-repeat: no-repeat;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    height: auto;
    flex-direction: column;
    padding: 0 20px;
  }

  .mission-image-container {
    background-image: url(${missionImage});
    position: relative;
    width: 50vw;
    height: 110%;
    top: -60px;
    background-size: cover;
    background-position: center;
    z-index: 10;
    border-radius: 0 20px 20px 0;

    @media ${breakpointSizes.mobile} {
      order: 2;
      width: 100%;
      height: 400px;
      margin-top: 0px;
      top: 0;
    }
  }

  .mission-right-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0 150px;
    height: 100%;

    @media ${breakpointSizes.mobile} {
      /* height: 50%; */
      height: auto;
      width: 100%;
      margin-top: 30px;
      padding: 20px 0px;
    }
    @media ${breakpointSizes.desktop} {
      padding: 0 250px;
    }
  }

  .mission-description {
    font-family: regular;
    color: #fbaf00;
    font-size: 14px;
    @media ${breakpointSizes.mobile} {
      padding: 0 0 0px 0;
      font-size: 18px;
    }
  }

  .mission-title {
    align-self: center;
    font-family: AtypDisplay-Bold;
    font-size: 30px;
    line-height: 36px;
    margin: 0 0 10% 0;
    /* margin: 0 0 14% 0; */

    @media ${breakpointSizes.mobile} {
      font-size: 30px;
    }
  }

  .mission-text {
    font-family: regular;
    font-size: 20px;
    line-height: 25px;
    @media ${breakpointSizes.mobile} {
      font-size: 16px;
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
