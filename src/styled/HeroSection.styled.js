import styled from 'styled-components'

export const StyledHeroSection = styled.div`
    height: 90vh;
    width: 100vw;
    padding: 0;
    overflow: hidden;
    


    .hero-image {
        width: 100vw;
        // height: 100vh;
        object.fit: fill;
        overflow: hidden;
        position: absolute;
        left: -0;
        // top: 0px;
        z-index: -10;
    }

    .hero-nav {
        position: absolute;
        top: 0;
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
        position: absolute;
        top: 389px;
        color: #fff;
        position: absolute;
        width: 1045px;
        height: 140px;
        left: 181px;
        top: 268px;
        font-family: 'AtypDisplay-Bold',
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 70px
    }

    span {
        color: #FBAF00;
    }

    .hero-badge {
        position: absolute;
        top: 804px;
        left: 530px;
    }

`;
