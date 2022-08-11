import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledOurNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #070909;
  height: 380px;

  @media ${breakpointSizes.mobile} {
    height: auto;
    width: 100vw;
    display: flex;
  }

  .numbers-text-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    color: #fff;

    @media ${breakpointSizes.mobile} {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .numbers-headings {
    padding-left: 150px;
    font-size: 20px;

    @media ${breakpointSizes.mobile} {
      margin-top: 20px;
      align-items: flex-start;
      width: 80%;
      text-align: center;
      padding-left: 0;
    }

    @media ${breakpointSizes.desktop} {
      padding-left: 250px;
    }
  }

  .numbers-description {
    font-size: 14px;
    color: #fbaf00;
    font-family: regular;

    @media ${breakpointSizes.mobile} {
      font-size: 17px;
      text-align: center;
      align-items: left;
      margin-bottom: 0;
    }
  }

  .numbers-title {
    font-size: 34px;
    font-family: semibold;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      font-size: 26px;
      padding: 12px 0 10px 0;
      margin: 0 !important;
    }
  }

  .tally-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
    width: 100%;
    padding: 0 150px;
    font-family: AtypDisplay-Bold;

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
      padding: 0;
      justify-content: center !important ;
    }

    @media ${breakpointSizes.desktop} {
      padding: 0 250px;
    }
  }

  .numbers-tally {
    text-align: center;

    @media ${breakpointSizes.mobile} {
      margin: 0;
      padding: 10px 0;
      text-align: center;
    }
  }

  .tally-title {
    font-size: 48px;
    padding: 0;
    margin: 0;
    @media ${breakpointSizes.mobile} {
      margin-top: 0;
    }
  }

  .tally-text {
    font-size: 20px;
    padding: 0;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      font-size: 16px;
      font-family: regular;
    }
  }
`;

export default StyledOurNumbers;
