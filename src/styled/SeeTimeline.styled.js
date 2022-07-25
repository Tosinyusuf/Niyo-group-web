import styled from "styled-components";
import empoweredImage from "../assets/empowered-image.jpeg";
import breakpointSizes from "../constants/breakpointSizes";

const StyledSeeTimeline = styled.div`
  background-image: url(${empoweredImage});
  background-size: cover;
  background-position: center;
  height: 90%;
  width: 100%;
  padding-top: 10%;
  align-items: center;
  justify-content: center;

  @media ${breakpointSizes.mobile} {
    height: 300px;
    padding-top:100px ;
  }

  @media ${breakpointSizes.desktop} {
  }

  .see-timeline-title {
    font-family: AtypDisplay-Bold;
    color: #fff;
    font-size: 80px;
    line-height: 80px;
    text-align: center;

    @media ${breakpointSizes.mobile} {
      font-size: 36px;
      line-height: 30px;
      padding: 0% 0;
    }

    @media ${breakpointSizes.desktop} {
    }

    span {
      color: #fbaf00;
    }
  }
`;

export default StyledSeeTimeline;
