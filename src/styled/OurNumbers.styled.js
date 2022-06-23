import styled from 'styled-components';

const StyledOurNumbers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #070909;
    height: 380px;

    .numbers-text-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        color: #fff;
    } 

    .numbers-headings {
        margin: 0 0 0 8%;
        font-size: 20px;
    }

.rectangle {
    align-self: center;
    width: 70px;
    margin: 0 1% 0 0;
}

    .numbers-description {
        font-size: 14px;
        color: #FBAF00;
        font-family: regular;
    }

    .numbers-title {
        font-size: 38px;
        font-family: AtypDisplay-Bold; 
        margin: 0;
    }

    .tally-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 8%;
        width: 100%;
        font-family: AtypDisplay-Bold;
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

