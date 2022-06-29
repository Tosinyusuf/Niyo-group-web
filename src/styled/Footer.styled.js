import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledFooter = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
  background-color: #070909;
  color: #fff;
  font-family: Light;

  @media ${breakpointSizes.mobile} {
    height: 350vh;
    width: 100vw;
  }

  .footer-links {
    display: flex;
    width: 100vw;
    justify-content: center;
    padding: 4% 0 4% 0;

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
    }
  }

  .footer-column {
    width: 18%;

    @media ${breakpointSizes.mobile} {
      width: 100vw;
    }
  }

  .footer-column:not(.top-footer) {
    @media ${breakpointSizes.mobile} {
      width: 100vw;
      padding: 0 0 50px 20px;
    }
  }

  .top-footer {
    @media ${breakpointSizes.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 70px;
    }
  }

  .top-text {
    font-family: regular;
    font-size: 14px;
    width: 90%;
    margin: 0 0 3% 0;

    @media ${breakpointSizes.mobile} {
      padding: 50px 0 40px 0;
      font-size: 20.5px;
      margin: 0;
    }
  }

  .legal {
    @media ${breakpointSizes.mobile} {
      order: 1;
    }
  }

  .niyo-logo {
    margin: 0 0 3% 0;

    @media ${breakpointSizes.mobile} {
      height: 70px;
      margin: 0;
    }
  }

  .footer-column-title {
    font-family: semibold;
    margin: 0 0 6% 0;
    color: #afafaf;

    @media ${breakpointSizes.mobile} {
      font-size: 22px;
      margin: 0;
      padding-bottom: 11px;
    }
  }

  .footer-column-text {
    font-family: regular;
    font-size: 14px;
    width: 90%;
    margin: 0 0 3% 0;

    @media ${breakpointSizes.mobile} {
      font-size: 20.5px;
      padding-bottom: 10px;
      font-family: Light;
    }
  }

  .socials-icons-container {
    @media ${breakpointSizes.mobile} {
      width: 60vw;
      padding-bottom: 90px;
    }
  }

  .socials-icon {
    height: 30px;
    margin: 6% 4% 0 0;

    @media ${breakpointSizes.mobile} {
      height: 38px;
    }
  }

  .contact-icon {
    margin-right: 2%;
    width: 10px;
  }

  .footer-no-icon {
    margin-left: 8%;
  }

  .footer-niyo-registration {
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    text-align: center;
    border-top: 1px solid #afafaf;

    @media ${breakpointSizes.mobile} {
      padding-top: 60px;
      font-family: semibold;
      font-size: 12px;
      border-top: 2px solid #afafaf;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .company-registration {
      padding: 0 0 4vh 10vw;

      @media ${breakpointSizes.mobile} {
        width: 56%;
        padding: 0;
        align-self: center;
      }
    }
  }
`;

export default StyledFooter;
