import styled from "styled-components";
import breakpointSizes from "../constants/breakpointSizes";

const StyledMeetTeam = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: semibold;
  padding-bottom: 50px;

  @media ${breakpointSizes.mobile} {
    align-items: flex-start;
    padding-left: 12%;
  }

  @media ${breakpointSizes.desktop} {
  }

  .meet-title {
    font-family: AtypDisplay-Bold;
    font-size: 70px;
    margin: 0;
    padding: 30px 0 30px 0;
    color: #000 !important;

    @media ${breakpointSizes.mobile} {
      /* padding-left: 12%; */
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .team-name {
    font-size: 36px;
    margin: 0;
    text-align: left;
    padding: 0 0 0 14%;
    z-index: 2;
    color: #000 !important;
    width: 100%;

    @media ${breakpointSizes.mobile} {
      padding: 0;
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
      top: 34px;
      left: -4px;
      z-index: -1;
    }
  }

  .members-cards {
    width: 76%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .individual-member {
      width: 22%;
      padding-bottom: 30px;
      z-index: 1;
      position: relative;

      @media ${breakpointSizes.mobile} {
        width: 120px;
      }

      @media ${breakpointSizes.desktop} {
      }

      .member-photograph {
        width: 100%;

        object-fit: cover;
      }

      .member-bio {
        position: absolute;
        background-color: #cdcdcdad;
        width: 105%;
        display: none;
        height: 91%;
        border-radius: 20px;
        z-index: 10;
        /* display: none; */

        .member-name {
          font-family: AtypDisplay-Bold;
          font-size: 20px;
          width: 90%;
          padding-left: 10%;
        }

        .member-role {
          font-family: Light;
          width: 90%;
          padding-left: 10%;
          margin: 0;
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
