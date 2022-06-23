import styled from 'styled-components';

const StyledBrands = styled.div`
    background-color: #070709;

    .brands-container {
        left: 20%;
        display: flex;
        flex-direction: column;
    }

    .brands-description {
        font-family: regular;
        color: #FBAF00; 
        width: 245.5px;
        height: 26px;
        font-size: 16px; 
        margin: 6% 0 0 10%;
    }

    .rectangle {
        align-self: center;
        width: 44px;
        margin: 0 2% 0 0;
    }

    .brands-title {
        width: 484px;
        height: 90px;
        font-family: AtypDisplay-Bold;
        font-size: 30px;
        margin: 0 0 0 10%;
        // line-height: 36px;
        // margin-top: 12px;
        color: #fff;

    }

    .brand-cards {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            color: #fff;
            padding-bottom: 4%;
    }

    .individual-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #141414;
        width: 24%;
        border-radius: 15px;
        margin: 0 2%;
    }

    .card-images {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 6%;
        position: relative;
    }

    .card-single-image {
        height: 42%;
        width: 90%;
    }

    .card-niyo-logo {
        position: absolute;
        bottom: -44px;
    }

    .brand-text-container {
        display: flex;
        flex-direction: column;
        align-items: flex-stretch;
        justify-content: center;
        width: 90%;
        height: 250px;
        margin: 12% 0 4% 0
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
        text-decoration: underline;
        color: #fff;
        height: 40px;
        width: 210px;
        align-self: flex-start;
    }

    .button-1 {
       background-color: #F39200
    }

    .button-2 {
        background-color: #FF6FD8
    }

    .button-3 {
        background-image: linear-gradient(to bottom, #ff6fd8, #ff61a8, #ff6575, #ff7944, #f39200);
    }


`;

export default StyledBrands;