import styled from 'styled-components';
import missionImage from "../assets/mission-image.svg";

const StyledMission = styled.div`
    height: 100vh;
    witdh: 100vw;
    display: flex;
    flex-direction: row;
    background-color: #070909;
    color: #fff;


    .mission-image-container {
        background-image: url(${missionImage});
        position: relative;
        width: 50vw;
        height: 110vh;
        top: -60px;
        background-size: 600px 1260px;
        background-size: cover;
        background-position: center;
        z-index: 10;
    }

    .mission-right-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50vw;
        height: 100vh;
    }
    
    .mission-description {
        font-family: regular;
        color: #FBAF00;
        width: 245.5px;
        height: 26px;
        font-size: 14px; 
    }

    .rectangle {
        margin-right: 8%;
        align-self: center;
        padding: 0;
        margin: 0 5% 0 0;
    }

    .mission-title {
        width: 484px;
        height: 90px;
        align-self: center;
        font-family: AtypDisplay-Bold;
        font-size: 30px;
        line-height: 36px;
        margin-top: 12px;

    }

    .mission-text {
        width: 30vw;
        // height: 168px;
        font-family: regular;
        font-size: 20px;
        line-height: 25px;
    }

    .mission-button {
        margin: 32px 0 0 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        color: #FBAF00;
        background: none; 
        cursor: pointer;
        text-decoration: underline;
        border: none;        
        font-size: 19px;
        font-family: regular;
    }

    .arrow {
        box-sizing: border-box;
        margin-left: 42%;
    }
`;

export default StyledMission; 