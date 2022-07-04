import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledContact = styled.div`
  background-color: #fff;
  font-family: Light;
  height: auto;
  padding:100px 150px;

  @media ${breakpointSizes.mobile} {
    height: auto;
    padding:30px 20px;
  }
  @media ${breakpointSizes.desktop} {
    padding:150px 250px ;
  }

  .contact-container {
    display: flex;
    justify-content:space-between ;

    @media ${breakpointSizes.mobile} {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .contact-left-container {
      width: 50%;
      height: 100%;
      text-align: left;

      @media ${breakpointSizes.mobile} {
        width: 100%;
      }

      .contact-left-contents {
        width: 50%;

        @media ${breakpointSizes.mobile} {
          width: 100%;
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
          width:100%;
          padding-bottom: 10px;
        }
      }

      .contact-image {
        height: 400px;
        @media ${breakpointSizes.mobile} {
          width:100%;
        }
      }
    }

    .contact-right-container {
      width: 50%;
      height: 100%;
      text-align: left;
      font-family: regular;

      @media ${breakpointSizes.mobile} {
        width: 100%;
        padding-top: 10%;
      }

      .contact-right-contents {
        width: 100%;

        @media ${breakpointSizes.mobile} {
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        width: 100%;

        .contact-form-label {
          padding-bottom: 32px;
        }

        input {
          padding-left: 20px;
        }

        .contact-names-section {
          display: flex;
          width: 100%;
          justify-content: space-between;

          @media ${breakpointSizes.mobile} {
          }
        }

        .name-box {
          display: flex;
          flex-direction: column;
          width: 46%;

          @media ${breakpointSizes.mobile} {
            width: 45%;
            justify-content: center;
          }

          /* .name-box:first-of-type {
            @media ${breakpointSizes.mobile} {
              margin-right: 50px;
            }
          } */
        }

        .form-box {
          display: flex;
          flex-direction: column;

          @media ${breakpointSizes.mobile} {
            width: 100%;
          }
        }

        .contact-details-capture {
          background-color: #f5f5f5;
          font-family: semibold;
          color: #d9d9d9;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          height: 44px;
          margin-top: 10px;

          @media ${breakpointSizes.mobile} {
            font-size: 10px;
          }
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

          @media ${breakpointSizes.mobile} {
            border-radius: 5px;
            border-color: #070909;
            height: 50px;
            width: 150px;
            margin-top: 22px;
            font-size: 20px;
          }
        }
      }
    }
  }
`;

export default StyledContact;
