import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledFooter = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
  background-color: #070909;
  color: #fff;
  font-family: Light;
  padding: 80px 150px 30px 150px;

  p {
    a {
      color: #fff;
    }
  }
  @media ${breakpointSizes.mobile} {
    height: auto;
    width: 100vw;
    padding: 50px 20px 20px 20px;
  }
  @media ${breakpointSizes.desktop} {
    padding: 80px 250px;
  }

  .footer-links {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 30px;

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
    }
  }

  .footer-column {
    @media ${breakpointSizes.mobile} {
      width: 100%;
    }
  }

  .footer-column:not(.top-footer) {
    @media ${breakpointSizes.mobile} {
      width: 100%;
      padding: 0 0 20px 0px;
    }
  }

  .top-footer {
    width: 35%;
    padding-right: 60px;
    @media ${breakpointSizes.mobile} {
      width: 100%;
      padding-right: 00px;
    }
  }

  .top-text {
    font-family: regular;
    font-size: 14px;
    width: 90%;
    margin: 0 0 3% 0;

    @media ${breakpointSizes.mobile} {
      padding: 20px 0 20px 0;
      font-size: 14px;
      margin: 0;
    }
  }

  .legal,
  .company,
  .explore,
  .footer-contact {
    width: 17%;
    @media ${breakpointSizes.mobile} {
      order: 1;
      width: 100%;
    }
  }

  .niyo-logo {
    margin: 0 0 3% 0;

    @media ${breakpointSizes.mobile} {
      height: 40px;
      margin: 0;
    }
  }

  .footer-column-title {
    font-family: semibold;
    margin: 0 0 6% 0;
    color: #afafaf;
    font-size: 14px;

    @media ${breakpointSizes.mobile} {
      font-size: 18px;
      margin: 0;
      padding-bottom: 11px;
    }
  }

  .footer-column-text {
    font-family: regular;
    font-size: 14px;
    margin: 0 0 3% 0;
    width: auto;

    @media ${breakpointSizes.mobile} {
      font-size: 14px;
      padding-bottom: 10px;
      font-family: Light;
    }
  }

  .socials-icons-container {
    @media ${breakpointSizes.mobile} {
      width: 100%;
      padding-bottom: 40px;
    }
  }

  .socials-icon {
    height: 30px;
    margin: 6% 4% 0 0;

    @media ${breakpointSizes.mobile} {
      height: 30px;
      margin: 0 10px 0 0;
    }
  }

  .contact-icon {
    margin-right: 2%;
    width: 10px;
  }

  .footer-no-icon {
    padding-left: 8%;

    @media ${breakpointSizes.mobile} {
      padding-left: 4%;
    }
  }

  .footer-niyo-registration {
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${breakpointSizes.mobile} {
      padding-top: 0px;
      font-family: semibold;
      font-size: 12px;
    }

    .company-registration {
      padding: 20px 0 0px 0vw;
      margin: 0;
      border-top: 1px solid #afafaf;
      width: 100%;
      align-self: center;
      font-size: 14px;

      @media ${breakpointSizes.mobile} {
        border-top: 2px solid #afafaf;
        width: 90%;
        align-self: center;
      }
    }
  }
`;

export default StyledFooter;
