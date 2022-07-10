import styled from "styled-components";

export const Contain = styled.div`
  display:flex ;
  font-family:Regular;
  flex-wrap:wrap ;
  justify-content:space-between ;
  .each{
    width:45%;
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
    }

  }
`