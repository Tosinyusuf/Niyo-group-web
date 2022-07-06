import StyledContact from "../../styled/Contact.styled";
import orangeRectangle from "../../assets/orange-rectangle.svg";
import contactImage from "../../assets/contact-image.svg";
import Join from "../home/JoinHome";

const Contact = () => {
  return (
    <>
      <StyledContact>
        <div className="contact-container">
          <div className="contact-left-container">
            <div className="contact-left-contents">
              <p className="contact-description">
                <img
                  src={orangeRectangle}
                  className="rectangle"
                  alt="rectangle"
                />
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
                alt="contact us"
              />
            </div>
          </div>

          <div className="contact-right-container">
            <div className="contact-right-contents">
              <form className="contact-form">
                <div className="contact-names-section">
                  <label className="contact-form-label name-box">
                    First Name
                    <input
                      className=" contact-details-capture "
                      type="text"
                      value="Your first name"
                    />
                  </label>

                  <label className="contact-form-label name-box">
                    Last Name
                    <input
                      className="contact-details-capture"
                      type="text"
                      value="Your last name"
                    />
                  </label>
                </div>

                <label className="contact-form-label form-box">
                  Email Address
                  <input
                    className="email-address contact-details-capture"
                    type="text"
                    value="Enter your email address here"
                  />
                </label>

                <label className="contact-form-label form-box">
                  Subject
                  <input
                    className="contact-subject contact-details-capture"
                    type="text"
                    value=""
                  />
                </label>

                <div className="contact-checkbox-section">
                  <p>Check box</p>
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

                <label className="contact-form-label form-box">
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
        </div>
      </StyledContact>
      <Join />
    </>
  );
};

export default Contact;
