import styled from "styled-components";

const StyledOpenRoles = styled.div`
  height: 90%;
  background-color: #070909;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: semibold;

  .roles-description {
    color: #fbaf00;
    font-size: 20px;

    .rectangle {
      width: 42px;
      height: 10px;
      padding-right: 4px;
    }
  }

  .roles-title {
    margin: 0;
    font-family: AtypDisplay-Bold;
    line-height: 60px;
    font-size: 60px;
    padding-bottom: 20px;
  }

  .roles-text {
    width: 40%;
    text-align: center;
    font-size: 17px;
    font-family: regular;
    padding-bottom: 26px;
  }

  .roles-button {
    border: none;
    border-radius: 20px;
    background-color: #fff;
    color: #070909;
    height: 50px;
    width: 170px;
    font-family: semibold;
    font-size: 14px;
  }
`;

export default StyledOpenRoles;
