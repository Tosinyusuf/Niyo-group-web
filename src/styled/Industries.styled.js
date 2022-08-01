import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledIndustries = styled.div`
  background-color: #070909;
  height: auto;
  width: 100%;
  padding: 100px 150px;
  font-family: regular;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    padding: 50px 20px;
  }
  @media ${breakpointSizes.desktop} {
    padding: 150px 250px;
  }

  .industries-container {
    display: flex;
    flex-direction: column;
    width: 100%;

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
          width: 90vw;
          font-size: 24px;
          /* padding-top: 14px; */
        }
      }

      .industries-title-text {
        width: 50%;

        @media ${breakpointSizes.mobile} {
          width: 90vw;
          font-size: 16px;
        }
      }
    }

    .industries-boxes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      /* align-self: center; */
      margin-top: 4%;
      width: 100%;

      @media ${breakpointSizes.mobile} {
        width: 95%;
        flex-wrap: wrap;
      }
    }

    .individual-box {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #fff;
      border-radius: 15px;
      /* height: 80%; */
      height: 80px;
      width: 20%;
      /* width: 200px; */
      margin: 0 6% 4% 0;

      @media ${breakpointSizes.mobile} {
        font-size: 14px;
        width: 44%;
        height: 80px;
      }

      :nth-child(3) {
        @media ${breakpointSizes.mobile} {
          align-self: center;
          margin: 0 20% 4% 12%;
        }
      }
    }
  }
`;

export default StyledIndustries;
