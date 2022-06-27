import styled from "styled-components";

const StyledIndustries = styled.div`
  background-color: #070909;
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: regular;
  color: #fff;

  .rectangle {
    align-self: center;
    width: 50px;
    margin: 0 1% 0 0;
  }

  .industries-description {
    margin: 0;
    color: #fbaf00;
    font-size: 14px;
  }

  .industries-container {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .industries-title-container {
    display: flex;
    flex-direction: row;
  }

  .industries-title {
    width: 50%;
    font-family: AtypDisplay-Bold;
    margin: 1% 0 0 0;
  }

  .industries-title-text {
    width: 50%;
  }

  .industries-boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 4%;
  }

  // .industries-boxes::before {
  //     content:
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  // }

  .individual-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 15px;
    height: 100px;
    width: 200px;
    margin-right: 6%;
  }
`;

export default StyledIndustries;
