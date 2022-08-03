import StyledVisionSection from "../../styled/VisionSection.styled";
import Arrow from "../../assets/arrow.svg";
import niyoBadge from "../../assets/niyo-badge-black.svg";
import { Link } from "react-router-dom";
const VisionSection = () => {
  return (
    <>
      <StyledVisionSection>
        <div className="vision-left-container">
          <div className="vision-text-container">
            {/* <ScrollAnimation animateIn="bounceIn"> */}
            <p className="vision-description">Our Vision</p>
            <h1 className="vision-title">
              #1 Destination for Black DisruptHers Globally!
            </h1>
            <p className="vision-text">
              A nation of brands where ambitious Black women build and create
              products that shape the face of culture.
            </p>
            <Link to="/about-us">
              <button className="vision-button">
                Learn More{" "}
                <span>
                  <img src={Arrow} alt="symbol" className="arrow" />
                </span>
              </button>
            </Link>
            {/* </ScrollAnimation> */}
          </div>
        </div>

        <div className="vision-image-container">
          <img src={niyoBadge} alt="niyo logo" className="hero-badge" />
        </div>
      </StyledVisionSection>
    </>
  );
};

export default VisionSection;

/* <img src={classroomImage1} alt="our vision" className="vision-image"/> */
