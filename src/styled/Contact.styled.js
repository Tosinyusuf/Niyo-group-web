import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledContact = styled.div`
  background-color: #fff;
  font-family: Light;
  height: 180vh;

  @media ${breakpointSizes.mobile} {
    height: 296vh;
  }

  .contact-container {
    display: flex;
    padding-top: 10%;

    @media ${breakpointSizes.mobile} {
      display: flex;
      flex-direction: column;
      width: 100vw;
      padding: 5%;
    }

    .contact-left-container {
      width: 45%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;

      @media ${breakpointSizes.mobile} {
        width: 100vw;
        flex-direction: column;
        align-items: flex-start;
      }

      .contact-left-contents {
        width: 50%;

        @media ${breakpointSizes.mobile} {
          width: 100vw;
        }
      }

      .contact-description {
        color: #fbaf00;
        font-family: semibold;
        font-size: 16px;
      }

      .contact-title {
        font-family: AtypDisplay-Bold;
        margin: 0;
      }

      .contact-text {
        width: 90%;
        right: 100px;

        @media ${breakpointSizes.mobile} {
          font-size: 20px;
          font-family: regular;
          color: #070909;
          padding-bottom: 10px;
        }
      }

      .contact-image {
        height: 400px;

        @media ${breakpointSizes.mobile} {
          height: 350px;
        }
      }
    }

    .contact-right-container {
      width: 65%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: left;
      font-family: regular;

      @media ${breakpointSizes.mobile} {
        display: flex;
        flex-direction: column;
      }

      .contact-right-contents {
        width: 100%;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        width: 100%;

        .contact-form-label {
          padding-bottom: 32px;
        }

        .contact-names-section {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }

        .name-box {
          display: flex;
          flex-direction: column;
          width: 46%;
        }

        .form-box {
          display: flex;
          flex-direction: column;
        }

        .contact-details-capture {
          background-color: #f5f5f5;
          font-family: semibold;
          color: #d9d9d9;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          height: 44px;
          margin-top: 10px;
        }

        .contact-checkbox-section {
          display: flex;
          flex-direction: column;
          padding-bottom: 20px;

          .checkbox {
            margin-bottom: 10px;
          }
        }

        .message-comments {
          height: 320px;
        }

        .contact-submit-button {
          font-family: semibold;
          background-color: #070909;
          color: #fff;
          width: 160px;
          border-radius: 15px;
          height: 40px;
          font-size: 16px;
        }
      }
    }
  }
`;

export default StyledContact;
