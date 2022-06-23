import StyledOurClients from "../styled/OurClients.styled";
import orangeRectangle from "../assets/orange-rectangle.svg";
import northropGrumman from "../assets/northrop.svg";
import goldman from "../assets/goldman.svg";
import microsoft from "../assets/microsoft.svg";
import gchq from "../assets/gchq.svg";
import codingBlackFemales from "../assets/cbf.svg";
import kpmg from "../assets/kpmg.svg";
// import cabinetOffice from "../assets/cabinet.svg";
// import taran3D from "../assets/taran.svg";
// import departmentEducation from "../assets/depedu.svg";
// import zappi from "../assets/zappi.svg";
// import substrakt from "../assets/substrakt.svg";
// import wmca from "../assets/wmca.svg";
// import myNexus from "../assets/nexus.svg";
// import bbc from "../assets/bbc.svg";
// import apple from "../assets/apple.svg";


const OurClients = () => {
    return (
        <>
        <StyledOurClients>
            <div className="clients-container">

                <div className="clients-headers">
                    <div className="clients-text-container">
                        <p className="clients-description"><img src={orangeRectangle} alt="symbol" className="rectangle" />Our Clients</p>
                        <h1 className="clients-title">Who we have worked with</h1>
                    </div>
                    <div className="button-container">
                        <button className="clients-button">Work with us</button>
                    </div>
                </div>

            <div className="clients-logos-container">
                <img src={northropGrumman} className="individual-client-logo" alt="client logo" />
                <img src={goldman} className="individual-client-logo" alt="client logo" />
                <img src={microsoft} className="individual-client-logo" alt="client logo" />
                <img src={gchq} className="individual-client-logo" alt="client logo" />
                <img src={codingBlackFemales} className="individual-client-logo" alt="client logo" />
                <img src={kpmg} className="individual-client-logo" alt="client logo" />
            </div>

        </div>

        </StyledOurClients>
        </>
    )
}

export default OurClients;

// // Saved for scroll
// <img src={cabinetOffice} className="individual-client-logo" alt="client logo" />
// <img src={taran3D} className="individual-client-logo" alt="client logo" />
// <img src={departmentEducation} className="individual-client-logo" alt="client logo" />
// <img src={zappi} className="individual-client-logo" alt="client logo" />
// <img src={substrakt} className="individual-client-logo" alt="client logo" />
// <img src={wmca} className="individual-client-logo" alt="client logo" />
// <img src={myNexus} className="individual-client-logo" alt="client logo" />
// <img src={bbc} className="individual-client-logo" alt="client logo" />
// <img src={apple} className="individual-client-logo" alt="client logo" />
