import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledWho = styled.div`
  background-color: #fff;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #070909;
  font-family: regular;
  margin-bottom: 6%;

  @media ${breakpointSizes.mobile} {
    height: auto;
  }

  @media ${breakpointSizes.desktop} {
  }

  .who-top-container {
    padding: 4% 0 0 8%;

    .rectangle {
      width: 42px;
      height: 10px;
      padding-right: 4px;
    }

    .who-description {
      color: #fbaf00;
      font-family: regular;

      @media ${breakpointSizes.mobile} {
        flex-direction: column;
        margin-bottom: 0;
      }

      @media ${breakpointSizes.desktop} {
      }
    }

    .who-title {
      font-family: AtypDisplay-Bold;
      font-size: 36px;
      margin: 0;
      color: #070909 !important ;
    }
    @media ${breakpointSizes.mobile} {
        padding:20px 20px 0 20px
      }
  }

  .who-bottom-container {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
    height: auto;

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
    }

    @media ${breakpointSizes.desktop} {
    }

    .who-text {
      width: 38%;
      font-size: 16px;
      font-family: regular;

      @media ${breakpointSizes.mobile} {
        width: 100%;
        padding: 0 20px;
        font-size: 15px;
      }

      @media ${breakpointSizes.desktop} {
      }
    }
  }
`;

export default StyledWho;
