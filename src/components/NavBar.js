import { StyledNavBar } from "../styled/NavBar.styled";
import niyoLogo from "../assets/niyo-logo-white.svg";

const NavBar = () => {
  return (
    <>
      <div>
        <StyledNavBar>
          <div className="nav-logo-container">
            <img src={niyoLogo} className="nav-logo" alt="niyo logo" />
          </div>
          <div className="nav-link-container">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              About Us
            </a>
            <a className="nav-link" href="/">
              Our Brands
            </a>
            <a className="nav-link" href="/">
              Work With Us
            </a>
            <button className="nav-button">Join the Niyo Nation</button>
          </div>
        </StyledNavBar>
      </div>
    </>
  );
};

export default NavBar;
