import styled from 'styled-components';

const StyledFooter = styled.div`
    background-color: #070909;
    color: #fff;
    font-family: Light; 

    
    .footer-links {
        display: flex;
        width: 100vw;
        justify-content: center;
        padding-top: 6%;
    }

    .footer-column {
        width: 18%;
    }

    .niyo-logo {
        margin: 0 0 3% 0;
    }

    .footer-column-title {
        font-family: semibold;
        margin: 0 0 6% 0;
    }

    .footer-column-text {
        font-family: regular;
        font-size: 12px;
        width: 90%;
        margin: 0 0 3% 0;
    }

    /* .socials-icons-container {
        display: flex;
        justify-content: space-between;
    } */
    

    .socials-icon {
        margin-right: 4%;
        height: 30px;
    }

    .contact-icon {
        margin-right: 2%;
    }

    .footer-no-icon {
        margin-left: 8%;
    }

    .footer-niyo-registration {
        font-family: AtypDisplay-Bold; 
        text-align: center;
    }
`;

export default StyledFooter;