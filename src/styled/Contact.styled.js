import styled from "styled-components";

const StyledContact = styled.div`
  background-color: green;
  font-family: Light;

  .contact-container {
    display: flex;

    .contact-left-container {
      width: 50%;
      height: 100%;
      padding-left: 4;

      .contact-title {
        font-family: AtypDisplay-Bold;
      }

      .contact-text {
        width: 45%;
      }

      .contact-image {
        height: 400px;
      }
    }

    .contact-right-container {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .contact-form {
        display: flex;
        flex-direction: column;

        .contact-checkbox-section {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export default StyledContact;
