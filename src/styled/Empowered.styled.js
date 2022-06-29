import styled from "styled-components";
import empoweredImage from "../assets/empowered-image.svg";
import breakpointSizes from "../constants/breakpointSizes";

const StyledEmpowered = styled.div`
  // background-color: blue;
  background-image: url(${empoweredImage});
  background-size: cover;
  height: 90vh;

  @media ${breakpointSizes.mobile} {
    width: 100vw;
    height: 90vh;
    /* height: 74vh; */
    background-position: center;
  }

  .empowered-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: AtypDisplay-Bold;
    color: #fff;
  }

  .empowered-title {
    width: 60%;
    font-size: 86px;
    line-height: 76px;
    text-align: center;

    @media ${breakpointSizes.mobile} {
      width: 94vw;
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

export default StyledEmpowered;