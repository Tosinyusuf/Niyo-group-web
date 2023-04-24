import { useState, useEffect } from "react";
import StyledOurNumbers from "../../styled/OurNumbers.styled";
import CountUp from "react-countup";
import axios from "axios";
import VisibilitySensor from "react-visibility-sensor";

const OurNumbers = () => {
  const [partnersCounts, setPartnersCounts] = useState(null)
  const [upskillCounts, setUpskillCounts] = useState(null)
  const [communityMember, setCommunityMember] = useState(null)

  useEffect(() => {
    async function fetchData() {
      await axios
      .get("https://niyogroupapi-wtushxuzaa-lm.a.run.app/api/v1/dashboard-overview")
      .then((res) => {
        setPartnersCounts(res.data.data.partnersCount)
        setUpskillCounts(res.data.data.upskillCount)
        setCommunityMember(res.data.data.communityMembers)
      })
        .catch((error) => {
        console.log(error)
      });
    }
    fetchData()
  })
  return (
    <>
      <StyledOurNumbers>
        <div className="numbers-text-container">
          <div className="numbers-headings">
            <p className="numbers-description">Our Numbers</p>
            <h1 className="numbers-title">Niyo in numbers</h1>
          </div>

          <div className="tally-container">
            <div className="numbers-tally">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <h4 className="tally-title">
                    {isVisible ? (
                      <span>
                        <CountUp end={partnersCounts} />
                      </span>
                    ) : null}
                    +
                  </h4>
                )}
              </VisibilitySensor>
              <p className="tally-text">Partners we work with</p>
            </div>

            <div className="numbers-tally">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <h4 className="tally-title">
                    {isVisible ? (
                      <span>
                        <CountUp end={communityMember} decimal="," decimals={0} />
                      </span>
                    ) : null}
                    +
                  </h4>
                )}
              </VisibilitySensor>
              <p className="tally-text">Community Members</p>
            </div>
            <div className="numbers-tally">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <h4 className="tally-title">
                    {isVisible ? (
                      <span>
                        <CountUp end={upskillCounts} decimal="," decimals={0} />
                      </span>
                    ) : null}
                    +
                  </h4>
                )}
              </VisibilitySensor>
              <p className="tally-text">Upskilled through Niyo Group</p>
            </div>
          </div>
        </div>
      </StyledOurNumbers>
    </>
  );
};

export default OurNumbers;

/* <CountUp end={3} decimal="," decimals={3} /> */
