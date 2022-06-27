import styled from "styled-components";

const StyledBrands = styled.div`
  background-color: #070709;

  .brands-container {
    display: flex;
    flex-direction: column;
    padding: 0% 10%;
    width: 100%;

    .brands-description {
      font-family: regular;
      color: #fbaf00;
      width: 245.5px;
      height: 26px;
      font-size: 16px;
    }

    .brands-title {
      width: 484px;
      height: 90px;
      font-family: AtypDisplay-Bold;
      font-size: 30px;
      color: #fff;
    }
  }

  .rectangle {
    align-self: center;
    width: 44px;
    margin: 0 2% 0 0;
  }

  .brand-cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #fff;
    padding: 0 10% 4% 10%;
    justify-content: space-between;
  }

  .individual-card {
    background-color: #141414;
    width: 32%;
    border-radius: 15px;
    padding: 20px;
    height: 600px;
    position: relative;
  }

  .card-images {
    height: 200px;
    width: 100%;
    background-size: cover;
    border-radius: 15px;
    position: relative;
  }

  .logo-div {
    position: absolute;
    bottom: -40px;
    width: 100%;
    text-align: center;
  }

  .card-niyo-logo {
    margin: auto;
  }

  .brand-text-container {
    height: 250px;
    margin-top: 50px;

    .one {
      background-color: #f39200;
    }

    .two {
      background-color: #ff6fd8;
    }

    .three {
      background: linear-gradient(180deg, #ff6fd8 0%, #f39200 100%);
    }
  }

  .card-title {
    font-family: AtypDisplay-Bold;
    margin: 0;
    font-size: 26px;
  }

  .card-text {
    font-family: regular;
  }

  .card-button {
    border-radius: 15px;
    border: none;
    font-family: semibold;
    font-size: 16px;
    color: #fff;
    height: 45px;
    position: absolute;
    width: 250px;
    bottom: 50px;
  }
`;

export default StyledBrands;
