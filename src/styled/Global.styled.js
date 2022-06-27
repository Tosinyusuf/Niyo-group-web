// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        /* overflow-x: hidden; */
    }

    body {
        height: 100vh;
        width:  100vw;
        margin: 0;
        overflow-x: hidden;

    }

    #root {
        height: 100vh;
        width:  100vw;
        /* margin: 0; */
    }

    .html {
        height: 100vh;
        width: 100vw;
    }
    
`;

export default GlobalStyle;
