import StyledContact from "../styled/Contact.styled";
import NavBar from "../components/NavBar";
import orangeRectangle from "../assets/orange-rectangle.svg";
import contactImage from "../assets/contact-image.svg";

const Contact = () => {
  return (
    <>
      <StyledContact>
        <NavBar />
        <div className="contact-container">
          <div className="contact-left-container">
            <p className="contact-description">
              <img
                src={orangeRectangle}
                className="rectangle"
                alt="rectangle"
              />{" "}
              Let's hear from you
            </p>
            <h1 className="contact-title">Work with us!</h1>
            <p className="contact-text">
              We’d love to hear from you or want to get in touch with us about
              an event, partnership or general enquiry?
            </p>
            <img
              src={contactImage}
              className="contact-image"
              alt="contact image"
            />
          </div>

          <div className="contact-right-container">
            <form className="contact-form">
              <div className="contact-names-section">
                <label className="contact-form-label">
                  First Name
                  <input
                    className="first-name contact-details-capture"
                    type="text"
                    value="Your first name"
                  />
                </label>

                <label className="contact-form-label">
                  Last Name
                  <input
                    className="last-name contact-details-capture"
                    type="text"
                    value="Your last name"
                  />
                </label>
              </div>

              <label className="contact-form-label">
                Email Address
                <input
                  className="email-address contact-details-capture"
                  type="text"
                  value="Enter your email address here"
                />
              </label>

              <label className="contact-form-label">
                Subject
                <input
                  className="contact-subject contact-details-capture"
                  type="text"
                  value=""
                />
              </label>

              <div className="contact-checkbox-section">
                <label>
                  <input
                    type="checkbox"
                    className="partnerships-checkbox checkbox"
                    name="partnerships-checkbox"
                  />
                  Partnerships
                </label>

                <label>
                  <input
                    type="checkbox"
                    className="enquiry-checkbox checkbox"
                    name="enquiry-checkbox"
                  />
                  General Enquiry
                </label>
              </div>

              <label className="contact-form-label">
                Message/Comments
                <input
                  className="message-comments contact-details-capture"
                  type="text"
                  value=""
                />
              </label>

              <button className="contact-submit-button">Send</button>
            </form>
          </div>
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
