import styled from "styled-components";

const StyledPriorities = styled.div`
  background-color: #070909;
  font-family: light;
  color: #fff;

  .priorities-top-container {
    padding: 4% 0 0 8%;

    .rectangle {
      width: 42px;
      height: 10px;
      padding-right: 4px;
    }

    .priorities-description {
      color: #fbaf00;
      font-family: semibold;
      font-size: 20px;
    }

    .priorities-title {
      font-family: AtypDisplay-Bold;
      font-size: 36px;
      padding-bottom: 100px;
      line-height: 36px;
      margin: 0;
    }
  }

  .priorities-bottom-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .priorities-block {
      display: flex;
      width: 38%;
      align-items: flex-start;
      height: 250px;

      .priorities-icon {
        padding-right: 14px;
      }

      .priorities-header {
        margin: 0;
        padding: 6px 0 10px 0;
        font-size: 23px;
      }

      .priorities-text {
        margin: 0;
        font-size: 17px;
      }
    }
  }
`;

export default StyledPriorities;
