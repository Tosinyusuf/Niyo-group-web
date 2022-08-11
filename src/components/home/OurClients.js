import { ourClientsLogos } from "../../constants/data";
import Marquee from "react-fast-marquee";
import StyledOurClients from "../../styled/OurClients.styled";
import { Link } from "react-router-dom";

const OurClients = () => {
  return (
    <>
      <StyledOurClients>
        <div className="clients-container">
          <div className="clients-headers">
            <div className="clients-text-container">
              <p className="clients-description">Our Clients</p>
              <h1 className="clients-title">Who we have worked with</h1>
            </div>
            <div className="button-container top">
              <button className="clients-button">
                <Link to="/contact-us">Work with us</Link>
              </button>
            </div>
          </div>

          <div className="clients-logos-container">
            <Marquee
              gradientWidth="0"
              speed="50"
              direction="left"
              pauseOnHover="true"
            >
              {ourClientsLogos.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item.image}
                      className="individual-client-logo"
                      alt="client logo"
                    />
                  </div>
                );
              })}
            </Marquee>
            <div className="button-container bottom">
              <button className="clients-button">
                <Link to="/contact-us">Work with us</Link>
              </button>
            </div>
          </div>
        </div>
      </StyledOurClients>
    </>
  );
};

export default OurClients;
