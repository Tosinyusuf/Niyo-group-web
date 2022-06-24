import styled from 'styled-components';
import heroImage from "../assets/hero-image.svg";

export const StyledHeroSection = styled.div`
    background-image: url(${heroImage});
    background-size: 100vw 100vh;
    background-size: cover;
    background-position: center;
    height: 120%;
 

    .hero-text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 60%;
        width: 100%;    
    }
     
    .hero-text:before {
        display: block;
        width: 160px;
        content: "";
        border-top: 3px solid #FBAF00;
        z-index: 2;
    }
    
    .hero-text {
        z-index: 2;
        color: #fff;
        width: 1045px;
        height: 140px;
        font-family: AtypDisplay-Bold;
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
    }

    span {
        color: #FBAF00;
    }

`;