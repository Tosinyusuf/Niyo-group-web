import styled from 'styled-components';

const StyledOurNumbers = styled.div`
    background-color: #070909;
    position: absolute;
    width: 1440px;
    height: 374px;
    top: 1694px;

    .numbers-text-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        left: 144px;
        color: #fff;
    }

    .numbers-headings {
        left: 14%;
        margin: 2% 0 0 8%;
        font-size: 20px;
    }

    .numbers-rectangle {
        left: 144px;
        width: 57px;
        margin-right: 2%;
    }

    .numbers-description {
        left: 144px;
        font-size: 20px;
        color: #FBAF00;
    }

    .numbers-title {
        font-size: 38px;
    }

    .tally-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 8%;
        width: 100%;
    }

    .numbers-tally {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-right: 200px;
    }

    .tally-title {
        font-size: 48px;
        padding: 0;
        margin: 0;
    }

    .tally-text {
        font-size: 20px;
        padding: 0;
        margin: 0;

    }


`;

export default StyledOurNumbers;

