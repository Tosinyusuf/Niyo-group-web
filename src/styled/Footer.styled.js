import styled from "styled-components";

const StyledFooter = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
  background-color: #070909;
  color: #fff;
  font-family: Light;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-links {
    display: flex;
    width: 100vw;
    justify-content: center;
    padding-top: 6%;
    margin: 1.5% 0 10% 0;
  }

  .footer-column {
    width: 18%;
  }

  .niyo-logo {
    margin: 0 0 3% 0;
  }

  .footer-column-title {
    font-family: semibold;
    margin: 0 0 6% 0;
  }

  .footer-column-text {
    font-family: regular;
    font-size: 12px;
    width: 90%;
    margin: 0 0 3% 0;
  }

  .socials-icon {
    height: 30px;
    margin: 6% 4% 0 0;
  }

  .contact-icon {
    margin-right: 2%;
  }

  .footer-no-icon {
    margin-left: 8%;
  }

  .footer-niyo-registration {
    font-family: "DM Sans", sans-serif;
    font-size: 17px;
    text-align: center;
    width: 90%;
    border-top: 1px solid #afafaf;
  }
`;

export default StyledFooter;
