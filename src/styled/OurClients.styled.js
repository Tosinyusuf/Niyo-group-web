import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledOurClients = styled.div`
  background-color: #070909;
  height: 40vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpointSizes.mobile} {
    height: 56vh;
  }

  .clients-container {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .clients-headers {
    display: flex;
    flex-direction: row;
  }

  .rectangle {
    align-self: center;
    width: 50px;
    margin: 0 3% 0 0;
  }

  .clients-text-container {
    display: flex;
    flex-direction: column;
    width: 50%;
    color: #fff;
  }

  .clients-description {
    color: #fbaf00;
    margin: 0;
    font-family: regular;

    @media ${breakpointSizes.mobile} {
      font-size: 18.5px;
    }
  }

  .clients-title {
    font-family: AtypDisplay-Bold;
    margin: 1% 0 10% 0;

    @media ${breakpointSizes.mobile} {
      width: 70vw;
      font-size: 30px;
      padding-top: 30px;
    }
  }

  .button-container {
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: flex-start;
    justify-content: flex-end;
    /* margin-top: 3%; */

    @media ${breakpointSizes.mobile} {
      order: 2;
    }
  }

  .clients-button {
    height: 30%;
    width: 30%;
    background-color: #fbaf00;
    border: none;
    border-radius: 15px;
    font-family: semibold;

    @media ${breakpointSizes.mobile} {
      order: 2;
      width: 200px;
      font-size: 15px;
    }
  }

  .clients-logos-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8%;
    @media ${breakpointSizes.mobile} {
      padding-top: 30px;
    }
  }

  .individual-client-logo {
    width: 120px;
    height: auto;
    margin-right: 50px;

    @media ${breakpointSizes.mobile} {
      width: 140px;
    }
  }
`;

export default StyledOurClients;
