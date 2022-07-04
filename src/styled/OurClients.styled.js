import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledOurClients = styled.div`
  background-color: #070909;
  height: auto;
  width: 100%;
  padding:70px 150px ;

  @media ${breakpointSizes.mobile} {
    padding:50px 20px
  }
  @media ${breakpointSizes.desktop} {
    padding:50px 250px ;
  }

  .clients-container {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    @media ${breakpointSizes.mobile} {
      font-size: 100%;
    }
  }

  .clients-description {
    color: #fbaf00;
    margin: 0;
    font-family: regular;

    @media ${breakpointSizes.mobile} {
      font-size: 14px;
    }
  }

  .clients-title {
    font-family: AtypDisplay-Bold;
    //margin: 1% 0 10% 0;

    @media ${breakpointSizes.mobile} {
     width: 90vw;
      font-size: 24px;
      padding-top: 00px;
    }
  }

  .button-container {
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: flex-start;
    justify-content: flex-end;
    /* margin-top: 3%; */

    
  }
  .top{
    @media ${breakpointSizes.mobile} {
      display:none ;
    }
  }
  .bottom{
    display:none ;
    margin-top:30px ;
    text-align:center ;
    width:100%;
    .clients-button {
      height:40px;
      width:180px;
    }
    @media ${breakpointSizes.mobile} {
        display:inline-block ;
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
    
    margin-bottom: 8%;
    @media ${breakpointSizes.mobile} {
      padding-top: 20px;
    }
  }

  .individual-client-logo {
    width: 120px;
    height: auto;
    margin-right: 50px;

    @media ${breakpointSizes.mobile} {
      width: 100px;
      margin-right:30px;
    }
  }
`;

export default StyledOurClients;
