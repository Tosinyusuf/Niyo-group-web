import StyledVisionSection from "../../styled/VisionSection.styled";
import orangeRectangle from "../../assets/orange-rectangle.svg";
import Arrow from "../../assets/arrow.svg";
import niyoBadge from "../../assets/niyo-badge-black.svg";
// import ScrollAnimation from "react-animate-on-scroll";
// import "animate.css/animate.min.css";

const VisionSection = () => {
  return (
    <>
      <StyledVisionSection>
        <div className="vision-left-container">
          <div className="vision-text-container">
            {/* <ScrollAnimation animateIn="bounceIn"> */}
              <p className="vision-description">
                <img src={orangeRectangle} alt="symbol" className="rectangle" />
                Our Vision
              </p>
              <h1 className="vision-title">
                #1 Destination for Black DisruptHers Globally!
              </h1>
              <p className="vision-text">
                A nation of brands where ambitious black women build and create
                products that shape the face of culture
              </p>
              <button className="vision-button">
                Learn More{" "}
                <span>
                  <img src={Arrow} alt="symbol" className="arrow" />
                </span>
              </button>
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
