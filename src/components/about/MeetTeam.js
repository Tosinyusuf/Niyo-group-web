import { useState, useEffect } from "react";
import linkedin from "../../assets/team/linkedin-yello.svg";
import twitter from "../../assets/team/twitter-yello.svg";
import axios from "axios";
import { ourCaptains } from "../../constants/data";
import StyledMeetTeam from "../../styled/MeetTeam.styled";
import { toast } from "react-toastify";

const MeetTeam = () => {
  const [ourTeamMembers, set0urTeamMembers] = useState(null)
  useEffect(() => {
    async function fetchData() {
      await axios
      .get("https://niyogroupapi-wtushxuzaa-lm.a.run.app/api/v1/team")
      .then((res) => {
        console.log(res,"ddd")
        set0urTeamMembers(res.data.data)
       
      })
      .catch((error) => {
        if(error.status === 400){
          toast("Ops!!! You already signed up for our mailing list, stay tuned.");
       }
      });
    }
    fetchData()
  })
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
                <div
                  className="individual-member"
                  key={index}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="member-bio">
                    <h1 className="member-name">{item.name}</h1>
                    <p className="member-role">{item.role}</p>
                    <div className="fact">
                      <h3>Fun Fact</h3>
                      <p>{item.funFact}</p>
                    </div>
                    <div className="member-socials">
                      <a
                        href={item.twitterLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={twitter} alt="Twitter Logo" />
                      </a>
                      <a href={item.LinkedIn} rel="noreferrer" target="_blank">
                        <img src={linkedin} alt="LinkedIn Logo" />
                      </a>
                    </div>
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
          {ourTeamMembers?.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="individual-member"
                  style={{ backgroundImage: `url(${item.photo.url})` }}
                >
                  <div className="member-bio">
                    <h1 className="member-name">{item.fullName}</h1>
                    <p className="member-role">{item.jobRole}</p>
                    <div className="fact">
                      <h3>Fun Fact</h3>
                      <p>{item.funFacts}.</p>
                    </div>
                    <div className="member-socials">
                      <a
                        href={item.twitterLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={twitter} alt="Twitter Logo" />
                      </a>
                      <a href={item.socialUrl} rel="noreferrer" target="_blank">
                        <img src={linkedin} alt="LinkedIn Logo" />
                      </a>
                    </div>
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
