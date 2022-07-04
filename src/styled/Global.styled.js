// import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;

    }

    button{
        border:none;
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
        margin: 0;
        overflow-x: hidden;
    }

    .html {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;

    }
    
`;

export default GlobalStyle;
