import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledTimeline = styled.div`
  background-color: #070909;
  height: auto;
  padding: 30px 0 0 0;
  /* padding: 30px 0; */

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  h1 {
    margin: 0;
  }

  .each-timeline {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .text {
      width: 51%;
      padding: 80px;
      color: #fff;

      h2 {
        font-family: AtypDisplay-Bold;

        @media ${breakpointSizes.mobile} {
          padding: 0 3% 0 12%;
        }
      }

      p {
        color: #fff !important;
        font-family: Light;
        font-size: 18px;

        @media ${breakpointSizes.mobile} {
          padding: 0 3% 0 12%;
          width: 100%;
        }
      }
    }
    .timeline-image {
      height: inherit;
      width: 49%;
      background-repeat: no-repeat;

      img {
        height: 110%;
        margin-top: -50px;
        margin-left: -55px;

        @media ${breakpointSizes.mobile} {
          margin: 0;
        }
      }
    }
  }

  .each-timeline:nth-child(2n) {
    flex-direction: row-reverse;
    .timeline-image {
      img {
        float: right;
        margin-top: -30px;
        margin-right: -50px;
      }
    }
  }
  @media ${breakpointSizes.mobile} {
    .each-timeline {
      .text,
      .timeline-image {
        width: 100%;
      }
      .text {
        padding: 15px 20px;
        p {
          font-size: 14px;
        }
      }
      .timeline-image {
        height: 300px;
        background-size: cover;
        border-radius: 20px;
        margin: 0 10px;
      }
    }
    .each-timeline:nth-child(2n) {
      .timeline-image {
        img {
          float: left;
          margin-right: 0;
        }
      }
    }
  }
`;

export default StyledTimeline;
