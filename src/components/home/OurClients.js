import { ourClientsLogos } from "../../constants/data";
import Marquee from "react-fast-marquee";
import orangeRectangle from "../../assets/orange-rectangle.svg";
import StyledOurClients from "../../styled/OurClients.styled";

const OurClients = () => {
  return (
    <>
      <StyledOurClients>
        <div className="clients-container">
          <div className="clients-headers">
            <div className="clients-text-container">
              <p className="clients-description">
                <img src={orangeRectangle} alt="symbol" className="rectangle" />
                Our Clients
              </p>
              <h1 className="clients-title">Who we have worked with</h1>
            </div>
            <div className="button-container top">
              <button className="clients-button">Work with us</button>
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
                  <>
                    <img
                      src={item.image}
                      className="individual-client-logo"
                      alt="client logo"
                    />
                  </>
                );
              })}
            </Marquee>
            <div className="button-container bottom">
              <button className="clients-button">Work with us</button>
            </div>
          </div>
        </div>
      </StyledOurClients>
    </>
  );
};

export default OurClients;
