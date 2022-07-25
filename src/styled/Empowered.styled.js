import styled from "styled-components";
import empoweredImage from "../assets/empowered-image.jpeg";
import breakpointSizes from "../constants/breakpointSizes";

const StyledEmpowered = styled.div`
  // background-color: blue;
  background-image: url(${empoweredImage});
  background-size: cover;
  height: 90vh;

  @media ${breakpointSizes.mobile} {
    width: 100vw;
    height: 350px;
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
    font-size: 86px;
    line-height: 76px;
    text-align: center;
    transform: translateY(3px);
    span {
      animation: reveal 3000ms ease-in-out infinite 200ms,
        glow 2500ms linear infinite 2000ms;
    }

    @media ${breakpointSizes.mobile} {
      width: 94vw;
      font-size: 30px;
      line-height: 40px;
    }
  }

  @keyframes reveal {
    80% {
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }
  @media ${breakpointSizes.mobile} {
    @keyframes reveal {
      80% {
        letter-spacing: 3px;
      }
      100% {
        background-size: 300% 300%;
      }
    }
  }
`;

export default StyledEmpowered;
