import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledTimeline = styled.div`
 background-color:#070909 ;
  height: auto;
  padding:30px 0;

  h1 {
    margin: 0;
  }
  .each-timeline{
    display:flex ;
    justify-content:space-between ;
    flex-wrap:wrap ;
    .text{
      width:42%;
      padding:80px;
      color:#fff;
      h2{
        font-family:AtypDisplay-Bold;
      }
      p{
        color:#fff !important;
        font-family:Light;
        font-size:18px ;
      }
    }
    .timeline-image{
      height:inherit;
      width:50%;
      img{
        margin-top:-30px; ;
        margin-left:-40px ;
      }
    }
  }

  .each-timeline:nth-child(2n){
    flex-direction: row-reverse;
    .timeline-image{
      img{
        float:right;
        margin-top:-30px; ;
        margin-right:-50px ;
      }
    }
  }
  @media ${breakpointSizes.mobile}{
      .each-timeline{
        .text,.timeline-image{
          width:100%;
        }
        .text{
          padding:15px 20px;
          p{
            font-size:14px ;
          }
        }
        .timeline-image{
          height:300px;
          background-size:cover ;
          border-radius:20px;
          margin:0 10px ;
          img{
            margin-top:-350px; ;
            margin-left:-20px ;

            height:inherit
          }
        }
      }
      .each-timeline:nth-child(2n){
        .timeline-image{
          img{
            float:left ;
            margin-right:0 ;
          }
        }
      }
  }
`;

export default StyledTimeline;
