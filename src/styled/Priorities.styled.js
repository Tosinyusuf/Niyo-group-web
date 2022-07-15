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

    .rectangle {
      width: 42px;
      height: 10px;
      padding-right: 4px;
    }

    .priorities-description {
      color: #fbaf00;
      font-family: semibold;
      font-size: 20px;
    }

    .priorities-title {
      font-family: AtypDisplay-Bold;
      font-size: 36px;
      padding-bottom: 100px;
      line-height: 36px;
      margin: 0;

      @media ${breakpointSizes.mobile} {
        padding-bottom: 14%;

        br {
          display: none;
        }
      }

      @media ${breakpointSizes.desktop} {
      }
    }
  }

  .priorities-bottom-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media ${breakpointSizes.mobile} {
    }

    @media ${breakpointSizes.desktop} {
    }

    .priorities-block {
      width: 38%;
      align-items: flex-start;
      height: 250px;

      @media ${breakpointSizes.mobile} {
        width: 100%;
        padding: 0 6%;
        margin-bottom: 14%;
        flex-direction: column;
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
        padding: 6px 0 10px 0;
        font-size: 23px;

        @media ${breakpointSizes.mobile} {
          font-family: semibold;
        }

        @media ${breakpointSizes.desktop} {
        }
      }

      .priorities-text {
        margin: 0;
        font-size: 17px;
      }
    }
  }
`;

export default StyledPriorities;
