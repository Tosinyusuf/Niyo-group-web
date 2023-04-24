import StyledMission from "../../styled/Mission.styled";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <>
      <StyledMission>
        <div className="mission-image-container"></div>

        <div className="mission-right-container">
          <div className="mission-text-container">
            <p className="mission-description">We are on a Mission</p>
            <h1 className="mission-title">
              Changing the narrative for Black female DisruptHers globally...
            </h1>
            <p className="mission-text">
              To build ecosystems for ambitious black women who have a passion
              to build and create disruptive ideas and technologies that drive
              society forward.{" "}
            </p>
            <Link to="/about-us">
              <button className="mission-button">
                Read More{" "}
                <span>
                  <img src={arrow} alt="symbol" className="arrow" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </StyledMission>
    </>
  );
};

export default Mission;
