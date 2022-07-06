import styled from "styled-components";
import heroImage from "../assets/hero-image.svg";

export const StyledAbout = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  font-family: AtypDisplay-Bold;

  .about-title {
    font-size: 60px;
    padding-bottom: 100px;
    line-height: 70px;
  }

  .about-title:before {
    display: block;
    width: 160px;
    content: "";
    border-top: 3px solid #fbaf00;
  }

  .about-scroll {
    height: 80px;
    padding-bottom: 20px;
  }
`;

export default StyledAbout;
