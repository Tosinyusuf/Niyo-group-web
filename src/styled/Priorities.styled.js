import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledPriorities = styled.div`
  background-color: #070909;
  font-family: light;
  color: #fff;

  @media ${breakpointSizes.mobile} {
    height: auto;
  }

  @media ${breakpointSizes.desktop} {
  }

  .priorities-top-container {
    padding: 4% 0 0 8%;

    .priorities-description {
      color: #fbaf00;
      font-family: semibold;
      font-size: 20px;
      @media ${breakpointSizes.mobile} {
        margin-bottom: 0;
        font-size: 16px;
      }
    }

    .priorities-title {
      font-family: AtypDisplay-Bold;
      font-size: 36px;
      padding-bottom: 100px;
      line-height: 36px;
      margin: 0;

      @media ${breakpointSizes.mobile} {
        padding-bottom: 10px;
        font-size: 24px;

        br {
          display: none;
        }
      }

      @media ${breakpointSizes.desktop} {
      }
    }
    @media ${breakpointSizes.mobile} {
      padding: 20px;
    }
  }

  .priorities-bottom-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-bottom: 4%;

    @media ${breakpointSizes.mobile} {
    }

    @media ${breakpointSizes.desktop} {
    }

    .priorities-block {
      width: 38%;
      align-items: flex-start;
      height: 200px;
      display: flex;

      @media ${breakpointSizes.mobile} {
        width: 100%;
        padding: 0 6% 20px 6%;
        flex-direction: column;
        height: auto;
      }

      @media ${breakpointSizes.desktop} {
      }

      .priorities-icon {
        padding-right: 14px;

        @media ${breakpointSizes.mobile} {
          height: 34px;
        }

        @media ${breakpointSizes.desktop} {
        }
      }

      .priorities-header {
        margin: 0;
        padding: 0 0 10px 0;
        font-size: 23px;
        font-family: semibold;

        @media ${breakpointSizes.mobile} {
          font-family: semibold;
        }

        @media ${breakpointSizes.desktop} {
        }
      }

      .priorities-text {
        margin: 0;
        font-size: 16px;
        width: 90%;

        @media ${breakpointSizes.mobile} {
          font-size: 14px;
        }
      }
    }
  }
`;

export default StyledPriorities;
