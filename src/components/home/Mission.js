import StyledMission from "../../styled/Mission.styled";
import orangeRectangle from "../../assets/orange-rectangle.svg";
import arrow from "../../assets/arrow.svg";

const Mission = () => {
  return (
    <>
      <StyledMission>
        <div className="mission-image-container"></div>

        <div className="mission-right-container">
          <div className="mission-text-container">
            <p className="mission-description">
              <img src={orangeRectangle} alt="symbol" className="rectangle" />
              We are on a Mission
            </p>
            <h1 className="mission-title">
              Changing the narrative for black female disruptors globally..
            </h1>
            <p className="mission-text">
              To build ecosystems for ambitious black women who have a passion
              to build and create disruptive ideas and technologies that drive
              society forward.{" "}
            </p>
            <button className="mission-button">
              Read More{" "}
              <span>
                <img src={arrow} alt="symbol" className="arrow" />
              </span>
            </button>
          </div>
        </div>
      </StyledMission>
    </>
  );
};

export default Mission;

/* <>
<StyledMission>
    <h1>Styled Mission</h1>

    ////// CHANGE ALL THIS TO

    <div className="mission-image-container">
        <img src={classroomImage2} alt="our mission" className="mission-image"/>
    </div>  


    <div className="mission-right-container">
        <div className="mission-text-container">
            <p className="mission-description"><img src={orangeRectangle} alt="symbol" className="rectangle" />Our Vision</p>
            <h1 className="mission-title">#1 Destination for Black DisruptHers Globally!</h1>
            <p className="mission-text">A nation of brands where ambitious black women build and create products that shape the face of culture</p>
            <button className="mission-button">Learn More <span><img src={Arrow} alt="symbol" className="arrow" /></span></button>
        </div>
    </div>
</StyledMission>
</> */
