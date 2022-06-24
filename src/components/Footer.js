import StyledFooter from "../styled/Footer.styled";
import niyoLogo from "../assets/niyo-logo-white.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import { ourSocials } from "../constants/data";


const Footer = () => {
    return (
        <>
        <StyledFooter>
            <div className="footer-links">
                <div className="footer-column">
                    <img src={niyoLogo} alt="Niyo Logo" className="niyo-logo" />
                    <p className="footer-column-text">The Niyo Group is a group of distinct brands focused on the economic empowerment of black women in high impact industries.</p>
                    <div className="socials-icons-container">
                        {ourSocials.map((item, index) => {
                            return (
                                <img src={item.image} className="socials-icon" alt="social media icon" />
                            )
                        })}
                    </div>
                </div>

                <div className="footer-column">
                    <h5 className="footer-column-title">Legal</h5>
                    <p className="footer-column-text">Privacy</p>
                    <p className="footer-column-text">Terms of service</p>
                </div>

                <div className="footer-column">
                    <h5 className="footer-column-title">Company</h5>
                    <p className="footer-column-text">Contact Us</p>
                    <p className="footer-column-text">About Us</p>
                    <p className="footer-column-text">Careers</p>
                    <p className="footer-column-text">Niyo Planet</p>
                </div>

                <div className="footer-column">
                    <h5 className="footer-column-title">Explore</h5>
                    <p className="footer-column-text">Blog</p>
                </div>

                <div className="footer-column footer-contact">
                    <h5 className="footer-column-title">Contact Us</h5>
                    <p className="footer-column-text"><img src={phone} alt="phone" className="contact-icon"/>+123 056 7983</p>
                    <p className="footer-column-text footer-no-icon"> +123 056 7983</p>
                    <p className="footer-column-text"><img src={email} alt="phone" className="contact-icon"/>admin@niyogroup</p>
                </div> 

            </div>

            <div className="footer-niyo-registration">
                <h2>Company No: 11371368. © 2022 Niyo Group.</h2>
            </div>
        </StyledFooter>
        </>
    )
}

export default Footer;



