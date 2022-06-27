
import styled from 'styled-components';

const StyledOurClients = styled.div`
    background-color: #070909;
    height: 40vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .clients-container { 
        display: flex;
        flex-direction: column;
        width: 80%;
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
    }

    .clients-description {
        color: #FBAF00;
        margin: 0;
        font-family: regular;
    }

    .clients-title {
        font-family: AtypDisplay-Bold; 
        margin: 1% 0 10% 0;
    }

    .button-container{ 
        display: flex;
        flex-direction: row;
        width: 50%;
        align-items: flex-start;
        justify-content: flex-end;
        /* margin-top: 3%; */
    }

    .clients-button {
        height: 30%;
        width: 30%;
        background-color: #FBAF00;
        border: none;
        border-radius: 15px;
        font-family: semibold;

    }

    .clients-logos-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 8%;
    }

    .individual-client-logo {
        width: 120px;
        margin-right: 50px;
    }
`;

export default StyledOurClients;