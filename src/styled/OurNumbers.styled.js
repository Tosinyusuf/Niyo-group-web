import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledOurNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #070909;
  height: 380px;

  @media ${breakpointSizes.mobile} {
    height: 640px;
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
    }
  }

  .numbers-headings {
    margin: 0 0 0 8%;
    font-size: 20px;

    @media ${breakpointSizes.mobile} {
      margin: 0;
    }
  }

  .rectangle {
    width: 70px;
    margin: 0 1% 0 0;
  }

  .numbers-description {
    font-size: 14px;
    color: #fbaf00;
    font-family: regular;

    @media ${breakpointSizes.mobile} {
      font-size: 17px;
    }
  }

  .numbers-title {
    font-size: 38px;
    font-family: AtypDisplay-Bold;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      font-size: 26px;
      padding: 12px 0 10px 0;
    }
  }

  .tally-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 8%;
    width: 100%;
    font-family: AtypDisplay-Bold;

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
      align-items: center;
      margin: 0;
    }
  }

  .numbers-tally {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 200px;

    @media ${breakpointSizes.mobile} {
      margin: 0;
      padding: 22px 0;
    }
  }

  .tally-title {
    font-size: 48px;
    padding: 0;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      font-size: 64px;
    }
  }

  .tally-text {
    font-size: 20px;
    padding: 0;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      font-size: 20px;
      font-family: regular;
    }
  }
`;

export default StyledOurNumbers;
