import styled from 'styled-components';

const StyledBrands = styled.div`
    background-color: green;


    .brands-description {
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

    .brands-title {
        width: 484px;
        height: 90px;
        align-self: center;
        font-family: AtypDisplay-Bold;
        font-size: 30px;
        line-height: 36px;
        margin-top: 12px;

    }

    .brand-cards {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            // align-items: space-between;
            height: 100%;
            width: 100%;
            color: #fff;
    }

    .individual-card {
        background-color: #141414;
        width: 26%;

    }


`;

export default StyledBrands;