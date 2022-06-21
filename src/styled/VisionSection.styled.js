import styled from 'styled-components';

const styledVisionSection = styled.div`
    // height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    left: 0;
    top: 896px;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #070909;
    position: absolute;
    z-index: -1;
    color: #fff;


    .vision-left-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50vw;
        // height: 100vh;
    }

    .vision-text-container {
        display: flex;
        flex-direction: column;
        width: 60%;
        height: 80%;
        align-items: center;
        justify-content: center;
        width: 50vw;
        bottom: 50%;

    }

    .vision-description {
        color: #FBAF00;
        position: absolute;
        width: 245.5px;
        height: 26px;
        left: 124px;
        top: 219px;
    }

    .vision-description {
        font-size: 27px;
        margin-right: 1%;
    }

    .rectangle {
        margin-right: 10%;
    }

    .vision-title {
        width: 484px;
        position: absolute;
        height: 90px;
        top: 269px;
        left: 124px;
        // font-family: 'Atyp Display';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 112.5%; 
    }

    .vision-text {
        position: absolute;
        width: 30vw;
        height: 168px;
        left: 124px;
        top: 394px;
        
        // font-family: 'Atyp Display';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        /* or 42px */
    }

    .vision-button {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        color: #FBAF00;
        position: absolute;
        width: 188px;
        height: 26px;
        left: 116px;
        top: 597px;
        background: none; 
        cursor: pointer;
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        text-decoration: underline;
        border: none;
    }

    .arrow {
        box-sizing: border-box;
        margin-left: 42%;
    }

    .vision-image-container {
        z-index: 10;
        padding: 0;
        margin: 0;
        // width: 50vw;
    }

    .vision-image {
        width: 100%;
        height: 100%;
        position: relative;
        padding: 0;
        margin: 0;
        z-index: 10;
        object.fit: cover;
        padding: 0;
        margin: 0;




        // width: 100%;
        // height: 120%;
        // bottom: 2500px;
        // top; 500px;
        // width: 50vw;
        // height: 115%;
    }

`;

export default styledVisionSection;