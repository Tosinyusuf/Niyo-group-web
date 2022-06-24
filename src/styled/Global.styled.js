// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        width:  100vw;
        margin: 0;
    }

    #root {
        height: 100vh;
        width:  100vw;
        margin: 0;
    }

    
`;

export default GlobalStyle;
