import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledIndustries = styled.div`
  background-color: #070909;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: regular;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    width: 100vw;
    height: 820px;
  }

  .industries-container {
    display: flex;
    flex-direction: column;
    width: 80%;

    .rectangle {
      align-self: center;
      width: 50px;
      margin: 0 1% 0 0;
    }

    .industries-description {
      margin: 0;
      color: #fbaf00;
      font-size: 14px;

      @media ${breakpointSizes.mobile} {
        font-size: 18.5px;
        padding-bottom: 20px;
      }
    }

    .industries-title-container {
      display: flex;
      flex-direction: row;

      @media ${breakpointSizes.mobile} {
        flex-direction: column;
      }

      .industries-title {
        width: 50%;
        font-family: AtypDisplay-Bold;
        margin: 1% 0 0 0;

        @media ${breakpointSizes.mobile} {
          width: 50vw;
          font-size: 30px;
          /* padding-top: 14px; */
        }
      }

      .industries-title-text {
        width: 50%;

        @media ${breakpointSizes.mobile} {
          width: 82vw;
          font-size: 20px;
        }
      }
    }

    .industries-boxes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 4%;

      @media ${breakpointSizes.mobile} {
        width: 90vw;
        flex-wrap: wrap;
      }
    }

    // .industries-boxes::before {
    //     content:
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    // }

    .individual-box {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #fff;
      border-radius: 15px;
      height: 100px;
      width: 200px;
      margin-right: 6%;

      @media ${breakpointSizes.mobile} {
        font-size: 16px;
        width: 160px;
        height: 80px;
      }

      :nth-child(3) {
        @media ${breakpointSizes.mobile} {
          align-self: center;
          flex-basis: 48%;
        }
      }
    }
  }
`;

export default StyledIndustries;
