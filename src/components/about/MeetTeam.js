import StyledMeetTeam from "../../styled/MeetTeam.styled";
import { ourCaptains } from "../../constants/data";
import { ourTeamMembers } from "../../constants/data";

const MeetTeam = () => {
  return (
    <>
      <StyledMeetTeam>
        <h1 className="meet-title">Meet The Team</h1>

        <div className="captains">
          <h4 className="team-name team-captains">
            The <span className="team-span">Captains</span>
          </h4>
        </div>
        <div className="members-cards">
          {ourCaptains.map((item, index) => {
            return (
              <>
                <div className="individual-member">
                  <img
                    src={item.image}
                    alt="team-"
                    className="member-photograph"
                  />
                  <div className="member-bio">
                    <h1 className="member-name">{item.name}</h1>
                    <p className="member-role">{item.role}</p>
                    <div className="member-socials"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="executors">
          <h4 className="team-name">
            The <span className="team-span">Executors</span>
          </h4>
        </div>
        <div className="members-cards">
          {ourTeamMembers.map((item, index) => {
            return (
              <>
                <div className="individual-member">
                  <img
                    src={item.image}
                    alt="team-"
                    className="member-photograph"
                  />
                  <div className="member-bio">
                    <h1 className="member-name">{item.name}</h1>
                    <p className="member-role">{item.role}</p>
                    <div className="member-socials"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </StyledMeetTeam>
    </>
  );
};

export default MeetTeam;
