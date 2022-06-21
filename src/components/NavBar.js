import {StyledNavBar} from "../styled/NavBar.styled";
import niyoLogo from "../assets/niyo-logo-white.svg";


const NavBar = () => {
    return (
        <>      
        <div>
            <StyledNavBar>
            <div className="nav-logo-container">
                <img src={niyoLogo} className="nav-logo" />
            </div>
            <div className="nav-link-container">
                <a className="nav-link">Home</a>
                <a className="nav-link">About Us</a>
                <a className="nav-link">Our Brands</a>
                <a className="nav-link">Work With Us</a>
                <button className="nav-button">Join the Niyo Nation</button>
            </div>
            </StyledNavBar>
        </div>
        </>
    )
}

export default NavBar;