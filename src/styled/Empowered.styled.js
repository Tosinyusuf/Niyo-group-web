import styled from 'styled-components';
import empoweredImage from "../assets/empowered-image.svg"

const StyledEmpowered = styled.div`
    // background-color: blue;
    background-image: url(${empoweredImage});
    background-size: cover;
    height: 90vh;

    .empowered-text {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-family: AtypDisplay-Bold;
        color: #fff;
    }

    .empowered-title {
        width: 60%;
        font-size: 86px;
        line-height: 76px;
        text-align: center;
    }
`;

export default StyledEmpowered;