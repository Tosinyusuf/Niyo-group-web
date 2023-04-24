import StyledIndustries from "../../styled/Industries.styled";

const Industries = () => {
  return (
    <>
      <StyledIndustries>
        <div className="industries-container">
          <p className="industries-description">Our Strength</p>
          <div className="industries-title-container">
            <h1 className="industries-title">Industries We Work In</h1>
            <p className="industries-title-text">
              We are on a mission, to build ecosystems of visionary women whose
              passion is building and creating disruptive ideas and technologies
              that drive society forward. We do this through our various brands.
            </p>
          </div>
          <div className="industries-boxes">
            <p className="individual-box">Bootcamps</p>
            <p className="individual-box">Hair and Beauty</p>
            <p className="individual-box">Fashion</p>
            <p className="individual-box">Blockchain</p>
            <p className="individual-box">Ed Tech</p>
          </div>
        </div>
      </StyledIndustries>
    </>
  );
};

export default Industries;
