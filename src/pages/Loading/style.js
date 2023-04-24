import styled from "styled-components";

export const Loader = styled.div`
    width:100%;
    height:100vh;
    background-color:#070909 ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    img{
        width:100px;
        animation: animateHeart 1.7s infinite;
    }
    @keyframes animateHeart {
  0% {
    transform:  scale(0.8);
    filter:drop-shadow(0px 0px 0px #555);
  }
  5% {
    transform:  scale(0.9);
  }
  10% {
    transform:  scale(0.8);
  }
  15% {
    transform: scale(1);
  }
  50% {
    transform:  scale(0.8);
    filter:drop-shadow( 10px 10px  0px #555) ;
  }
  100% {
    transform: scale(0.8);
    
    filter:drop-shadow(0px 0px 0px #555) ;
  }
}

`