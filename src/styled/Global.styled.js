// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import "../fonts/fonts/AtypDisplay-Bold.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'AtypDisplay-Bold';
    src: local('AtypDisplay-Bold'),
    url("../fonts/fonts/AtypDisplay-Bold.ttf")
}


    body {
        height: 100vh;
        width:  100vw;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }

    #root {
        height: 100vh;
        width:  100vw;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }

    
`;

export default GlobalStyle;
