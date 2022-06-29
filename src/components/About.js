import StyledAbout from "../styled/About.styled";
import downloadIcon from "../assets/download-icon.svg";

const About = () => {
  return (
    <>
      <StyledAbout>
        <h1 className="about-title">
          We are a nation of disruptors, <br></br>We are Niyo
        </h1>

        <img src={downloadIcon} className="about-scroll" alt="scroll down" />
      </StyledAbout>
    </>
  );
};

export default About;
