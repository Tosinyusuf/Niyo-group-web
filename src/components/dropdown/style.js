import styled from "styled-components";

export const Contain = styled.div`
  display:flex ;
  font-family:Regular;
  flex-wrap:wrap ;
  justify-content:space-between ;
  a{
    color:#070909;
    width:45%;
  }
  .each{
    width:100%;
    margin-top:10px;
    display:flex ;
    cursor: pointer;
    .icon{
        margin-right:10px;
        img{
            width:40px;
        }
    }
    .text{
        padding-top:6px;
    }
    h2{
        font-family:semibold;
        margin:0 ;
        color:#070909 !important;
    }

  }
`