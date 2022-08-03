import StyledWho from "../../styled/Who.styled";

const Who = () => {
  return (
    <>
      <StyledWho>
        <div className="who-top-container">
          <p className="who-description">Get to know us</p>
          <h1 className="who-title">Who we are</h1>
        </div>

        <div className="who-bottom-container">
          <p className="who-text">
            We are Niyo, a group of distinct brands focused on the economic
            empowerment of black women. <br></br>
            <br></br>
            We are on a mission to ensure every black woman on the planet is a
            producer, builder or creator of high impact ecosystems. <br></br>
            <br></br>
            The name Niyo, comes from the greek prefix Neo which means Young,
            Innovative, Newness and also our CEO’s name backwards. <br></br>
            <br></br>
            Every black woman we work with is equipped with the right spirit,
            the right attitude, the right knowledge,
          </p>

          <p className="who-text">
            understanding, skills and wisdom so they can build products and
            services that change the face of culture . We want every black woman
            on the planet to ‘Feel Empowered and Be Empowered’. <br></br>
            <br></br>
            We operate with a quadruple bottom line blueprint of people,
            purpose, profit and planet. Everything we do flows from this
            blueprint as this is the foundation of why Niyo exists. <br></br>
            <br></br>
            We have been on this mission informally since our founder was 8, but
            we were officially founded in 2018.
          </p>
        </div>
      </StyledWho>
    </>
  );
};

export default Who;
