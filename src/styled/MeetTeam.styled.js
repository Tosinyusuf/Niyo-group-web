import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledMeetTeam = styled.div`
  background-color: #fff;
  
  font-family: semibold;
  padding-bottom: 50px;

  @media ${breakpointSizes.mobile} {
    align-items: flex-start;
    //padding-left: 12%;
  }

  @media ${breakpointSizes.desktop} {
  }

  .meet-title {
    font-family: AtypDisplay-Bold;
    font-size: 70px;
    margin: 0;
    padding: 30px 0 30px 0;
    text-align:center !important;
    color: #000 !important;

    @media ${breakpointSizes.mobile} {
     font-size:35px ;
     text-align:center ;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .team-name {
    font-size: 36px;
    margin: 0;
    text-align: left;
    padding: 0 0 0 150px;
    z-index: 2;
    color: #000 !important;
    width: 100%;
    @media ${breakpointSizes.mobile} {
      padding: 0 20px;
      font-size:28px; ;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .team-span {
    position: relative;

    :before {
      position: absolute;
      display: block;
      width: 106%;
      content: "";
      border-top: 16px solid #fbaf00;
      padding-bottom: 20%;
      top: 20px;
      left: -4px;
      z-index: -1;
    }
    @media ${breakpointSizes.mobile} {
      ::before{
        border-top: 10px solid #fbaf00;
        top:18px;}
    }
  }

  .members-cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:0 150px;
    //justify-content: space-evenly;

    .individual-member {
      width: 18%;
      padding-bottom: 30px;
      z-index: 1;
      height:220px;
      margin-right:2% ;
      background-size:cover ;
      border-radius:15px; ;
      margin-bottom:20px;
      transition:0.2s ease-in-out ;
      cursor: pointer;
      background-position:center ;

     


      .member-bio {
        background:linear-gradient(0deg, rgba(205, 205, 205, 0.68), rgba(205, 205, 205, 0.68));
        width: 100%;
       display: none;
        height: inherit;
        border-radius: 15px;
        padding:15px 10px;
        transition:0.2s ease-in-out ;
        z-index: 10;
        position:relative ;
        /* display: none; */

        .member-name {
          font-family: AtypDisplay-Bold;
          font-size: 15px;
          color:#000 !important;
          margin-bottom:0 ;
        }

        .member-role {
          font-family: Light;
          font-size:12px; ;
          margin: 0;
        }
        .fact{
          margin-top:10px ;
          h3,p{
            color:#000 !important;
            font-style:italic ;
            margin:0 ;
          }
          h3{
            font-family: semibold;
            font-size:15px; ;
          }
          p{
            font-family: Light;
          font-size:12px; ;
          
          }
        }
      }
    }
    .individual-member:hover {
    
        .member-bio{
          display:block ;
        }
    }
    @media ${breakpointSizes.mobile} {
       padding:0 20px;
       .individual-member {
        width:48%;
        height:200px;
        .member-bio{
          padding:15px;
          .member-name{
            font-size:12px;
          }
          .member-role{
            font-size:10px; ;
          }
          .fact{
            margin-top:8px ;
            h3{
              font-size:12px;
            }
            p{
              font-size:10px ;
            }
          }
        }

       }
      }

      @media ${breakpointSizes.desktop} {
        padding:0 250px;
      }
  }
  .member-socials{
    bottom:10px;
    left:10px;
    position:absolute ;
    a{
      img{
        width:25px;
        margin-right:6px ;
      }
    }
    @media ${breakpointSizes.mobile} {
        bottom:10px;
        left:15px;
        a{
      img{
        width:15px;
      }
    }
      }
  }

  .captains {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .executors {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export default StyledMeetTeam;
