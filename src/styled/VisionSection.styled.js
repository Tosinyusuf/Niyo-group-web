import styled from "styled-components";
import classroomImage1 from "../assets/classroom-image-1.svg";
import breakpointSizes from "../constants/breakpointSizes";
import backgroundLine1 from "../assets/background/background-line-1.png";

const styledVisionSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #070909;
  background-image: url(${backgroundLine1});
  background-position: 15% 45%;
  /* background-position: left; */
  background-repeat: no-repeat;
  z-index: -1;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    display: block;
    height: auto;
    padding-left: 20px;
  }

  .vision-left-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0 150px;
    height: 100%;

    @media ${breakpointSizes.mobile} {
      width: 100%;
      padding: 20px 0px;
      height: auto;
    }
    @media ${breakpointSizes.desktop} {
      padding: 0 250px;
    }
  }

  .vision-description {
    font-family: regular;
    color: #fbaf00;
    height: 26px;
    font-size: 14x;

    @media ${breakpointSizes.mobile} {
      font-size: 18px;
      padding: 8% 0;
    }
  }

  .vision-title {
    align-self: center;
    font-family: AtypDisplay-Bold;
    font-size: 30px;
    line-height: 36px;
    margin: 12px 0 42px 0;
    /* margin-top: 12px; */

    @media ${breakpointSizes.mobile} {
      font-size: 28px;
      line-height: 30px;
      margin-bottom: 5px;
    }
  }

  .vision-text {
    font-family: regular;
    font-size: 20px;
    line-height: 25px;

    @media ${breakpointSizes.mobile} {
      font-size: 16px;
      padding-top: 10px;
      padding-right: 28px;
    }
  }

  .vision-button {
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

    @media ${breakpointSizes.mobile} {
      padding-bottom: 30px;
      font-size: 19px;
    }
  }

  .arrow {
    box-sizing: border-box;
    margin-left: 42%;
  }

  .vision-image-container {
    position: relative;
    width: 50vw;
    height: 100%;
    background-image: url(${classroomImage1});
    top: -70px;
    background-size: cover;
    background-position: center;
    z-index: 10;
    border-radius: 20px 0 0 20px;
    margin-bottom: 20%;

    @media ${breakpointSizes.mobile} {
      top: 3%;
      width: 95%;
      height: 83vw;
      border-radius: 20px;
      margin: 0;
    }
  }

  .hero-badge {
    position: relative;
    top: -90px;
    left: -100px;

    @media ${breakpointSizes.mobile} {
      height: 80px;
      top: -50px;
      float: right;
      margin-right: -80px;
    }
  }
`;

export default styledVisionSection;
