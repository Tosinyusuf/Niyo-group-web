import styled from 'styled-components'

export const StyledNavBar = styled.div`
position: absolute;
width: 100%;
height: 91px;
display: flex;
justify-content: space-evenly;
align-items: center;
overflow-x: hidden;
padding: 0;
margin: 0;
left: 0px;
top: 0px;
background-color: #070909;
color: #fff;

.nav-logo-container {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-logo {
    height: 6.5vh;
}

.nav-link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    right: 10%;
}

.nav-link {
    margin: 0 1%;
    font-size: 16px;
}

.nav-link:first-child {
    border-bottom: 2px solid #FBAF00;
}

.nav-button {
    background-color: #fff;
    color: #070909;
    height: 6.5vh;
    border-radius: 20px;
    width: 197px;
    height: 55px;
}
`;
