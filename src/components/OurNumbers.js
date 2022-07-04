import StyledOurNumbers from "../styled/OurNumbers.styled";
import orangeRectangle from "../assets/orange-rectangle.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const OurNumbers = () => {
  return (
    <>
      <StyledOurNumbers>
        <div className="numbers-text-container">
          <div className="numbers-headings">
            <p className="numbers-description">
              <img src={orangeRectangle} className="rectangle" alt="symbol" />
              Our Numbers
            </p>
            <h1 className="numbers-title">Niyo in numbers</h1>
          </div>

          <div className="tally-container">
            <div className="numbers-tally">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <h4 className="tally-title">
                    {isVisible ? (
                      <span>
                        <CountUp end={10} decimal="," decimals={3} />
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
                        <CountUp end={3} decimal="," decimals={3} />
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
                        <CountUp end={100} decimal="," decimals={3} />
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
