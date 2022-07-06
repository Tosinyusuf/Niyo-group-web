import styled from "styled-components";
import empoweredImage from "../assets/empowered-image.svg";

const StyledSeeTimeline = styled.div`
  background-image: url(${empoweredImage});
  background-size: cover;
  background-position: center;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .see-timeline-title {
    font-family: AtypDisplay-Bold;
    color: #fff;
    font-size: 80px;
    line-height: 80px;
    text-align: center;

    span {
      color: #fbaf00;
    }
  }
`;

export default StyledSeeTimeline;
