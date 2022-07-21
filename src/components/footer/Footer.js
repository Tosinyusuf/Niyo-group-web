import StyledFooter from "../../styled/Footer.styled";
import niyoLogo from "../../assets/niyo-logo-white.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import { ourSocials } from "../../constants/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="footer-links">
          <div className="footer-column top-footer">
            <img src={niyoLogo} alt="Niyo Logo" className="niyo-logo" />
            <p className="top-text">
              The Niyo Group is a group of distinct brands focused on the
              economic empowerment of black women in high impact industries.
            </p>
            <div className="socials-icons-container">
              {ourSocials.map((item, index) => {
                return (
                  <img
                    src={item.image}
                    className="socials-icon"
                    alt="social media icon"
                  />
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
              <Link to="/"> Work with Us </Link>
            </p>
            <p className="footer-column-text">
              <Link to="/">About Us </Link>
            </p>
            <p className="footer-column-text">
              <Link to="/">Careers </Link>
            </p>
            <p className="footer-column-text">Niyo Planet</p>
            <p className="footer-column-text">
              <a className="nav-link" href="https://niyonetwork.com/">
                Niyo Bootcamps
              </a>
            </p>
            <p className="footer-column-text">
              <a className="nav-link" href="https://niyohairandbeauty.com/">
                Niyo Hair & Beauty
              </a>
            </p>
            <p className="footer-column-text">
              <a href="https://dapp.niyo.co">Niyo Dapp </a>
            </p>
          </div>

          <div className="footer-column explore">
            <h5 className="footer-column-title">Explore</h5>
            <p className="footer-column-text">
              <a href="https://medium.com/niyogroup">Blog </a>
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
            <p className="footer-column-text footer-no-icon">
              <a href="tel:0121 295 6645">0121 295 6645 </a>
            </p>
            <p className="footer-column-text">
              <a href="mailto:hello@niyo.co">
                <img src={email} alt="phone" className="contact-icon" />
                hello@niyo.co
              </a>
            </p>
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
