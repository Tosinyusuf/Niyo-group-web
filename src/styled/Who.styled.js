import styled from "styled-components";

const StyledWho = styled.div`
  background-color: #fff;
  height: 80vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  color: #070909;
  font-family: semibold;
  margin-bottom: 6%;

  .who-top-container {
    padding: 4% 0 0 8%;

    .rectangle {
      width: 42px;
      height: 10px;
      padding-right: 4px;
    }

    .who-description {
      color: #fbaf00;
    }

    .who-title {
      font-family: AtypDisplay-Bold;
      font-size: 36px;
      margin: 0;
    }
  }

  .who-bottom-container {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
    height: 80%;

    .who-text {
      width: 38%;
      font-size: 16px;
    }
  }
`;

export default StyledWho;
