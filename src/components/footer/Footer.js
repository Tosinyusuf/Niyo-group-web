import StyledFooter from "../../styled/Footer.styled";
import niyoLogo from "../../assets/niyo-logo-white.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import { ourSocials } from "../../constants/data";
import { Link } from "react-router-dom";
import badge from "../../assets/badge.svg"

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="footer-links">
          <div className="footer-column top-footer">
            <img src={niyoLogo} alt="Niyo Logo" className="niyo-logo" />
            <p className="top-text">
              The Niyo Group is a group of<br /> distinct brands focused on<br /> the
              economic empowerment<br /> of black women in high <br />impact industries.
            </p>
            <div className="socials-icons-container">
              {ourSocials.map((item, index) => {
                return (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <img
                      src={item.image}
                      className="socials-icon"
                      alt="social media icon"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-column legal">
            <h5 className="footer-column-title ">Legal</h5>
            <p className="footer-column-text">Privacy</p>
            <p className="footer-column-text">Terms of service</p>
          </div>

          <div className="footer-column company">
            <h5 className="footer-column-title">Company</h5>
            <p className="footer-column-text">
              <Link to="/about-us">About Us </Link>
            </p>
            <p className="footer-column-text">
              <Link to="/careers">Careers </Link>
            </p>
            <p className="footer-column-text">
              <Link to="/careers"> Work with Us </Link>
            </p>
            <p className="footer-column-text">
              <Link to="/contact-us"> Partner with us </Link>
            </p>

            <p className="footer-column-text">Niyo Planet</p>
            <p className="footer-column-text">
              <a
                className="nav-link"
                href="https://niyonetwork.com/"
                rel="noreferrer"
                target="_blank"
              >
                Niyo Bootcamps
              </a>
            </p>
            <p className="footer-column-text">
              <a
                className="nav-link"
                href="https://niyohairandbeauty.com/"
                rel="noreferrer"
                target="_blank"
              >
                Niyo Hair & Beauty
              </a>
            </p>
            <p className="footer-column-text">
              <a href="https://dapp.niyo.co" rel="noreferrer" target="_blank">
                Niyo Dapp{" "}
              </a>
            </p>
          </div>

          <div className="footer-column explore">
            <h5 className="footer-column-title">Explore</h5>
            <p className="footer-column-text">
              <a
                href="https://medium.com/niyogroup"
                rel="noreferrer"
                target="_blank"
              >
                Blog{" "}
              </a>
            </p>
            <p className="footer-column-text">
              <a href="https://events.niyo.co" rel="noreferrer" target="_blank">
                Niyo Events
              </a>
            </p>
          </div>

          <div className="footer-column footer-contact">
            <h5 className="footer-column-title">Contact Us</h5>
            <p className="footer-column-text">
              <a href="tel: +44 121 2956645">
                <img src={phone} alt="phone" className="contact-icon" />
                +44 121 2956645
              </a>
            </p>
            <p className="footer-column-text">
              <a href="mailto:admin@niyo.co">
                <img src={email} alt="phone" className="contact-icon" />
                admin@niyo.co
              </a>
            </p>

            <img src={badge} alt=""  style={{width:"70px", marginTop:"20px"}}/>
          </div>
        </div>

        <div className="footer-niyo-registration">
          <h2 className="company-registration">
            COMPANY NO: 11371368. © 2022 NIYO GROUP.
          </h2>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
