import StyledContact from "../../styled/Contact.styled";
import contactImage from "../../assets/contact-image.svg";
import Join from "../home/JoinHome";

import axios from "axios";
import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    isPartnerShip: false,
    isGeneralEnquiry: false,
  });

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(userData);
    console.log(userData.firstName);

    axios
      .post("https://api.niyo.co/v1/contact/partner-with-us", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        subject: userData.subject,
        message: userData.message,
        isPartnerShip: userData.isPartnerShip,
        isGeneralEnquiry: userData.isGeneralEnquiry,
      })
      .then((resp) => {
        console.log(resp.userData);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error!");
      });
  };

  const handleSubmit = (e) => {
    const newUserData = { ...userData };
    newUserData[e.target.id] = e.target.value;
    setUserData(newUserData);
  };

  return (
    <>
      <StyledContact>
        <div className="contact-container">
          <div className="contact-left-container">
            <div className="contact-left-contents">
              <p className="contact-description">Let's hear from you</p>
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
              <form onSubmit={(e) => submitForm(e)} className="contact-form">
                <div className="contact-names-section">
                  <label className="contact-form-label name-box">
                    First Name
                    <input
                      className=" contact-details-capture "
                      type="text"
                      placeholder="Your first name"
                      onChange={(e) => handleSubmit(e)}
                      id="firstName"
                      value={userData.firstName}
                    />
                  </label>

                  <label className="contact-form-label name-box">
                    Last Name
                    <input
                      className="contact-details-capture"
                      type="text"
                      placeholder="Your last name"
                      onChange={(e) => handleSubmit(e)}
                      id="lastName"
                      value={userData.lastName}
                    />
                  </label>
                </div>

                <label className="contact-form-label form-box">
                  Email Address
                  <input
                    className="email-address contact-details-capture"
                    type="text"
                    placeholder="Enter your email address here"
                    onChange={(e) => handleSubmit(e)}
                    id="email"
                    value={userData.email}
                  />
                </label>

                <label className="contact-form-label form-box">
                  Subject
                  <input
                    className="contact-subject contact-details-capture"
                    type="text"
                    // placeholder=""
                    onChange={(e) => handleSubmit(e)}
                    id="text"
                    value={userData.text}
                  />
                </label>

                <div className="contact-checkbox-section">
                  <p>Check box</p>
                  <label>
                    <input
                      type="checkbox"
                      className="partnerships-checkbox checkbox"
                      name="partnerships-checkbox"
                      onChange={(e) => handleSubmit(e)}
                      id="isPartnerShip"
                      value={userData.isPartnerShip}
                    />
                    Partnerships
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      className="enquiry-checkbox checkbox"
                      name="enquiry-checkbox"
                      onChange={(e) => handleSubmit(e)}
                      id="isGeneralEnqiry"
                      value={userData.isGeneralEnquiry}
                    />
                    General Enquiry
                  </label>
                </div>

                <label className="contact-form-label form-box">
                  Message/Comments
                  <textarea
                    className="message-comments contact-details-capture"
                    type="text"
                    // placeholder=""
                    onChange={(e) => handleSubmit(e)}
                    id="message"
                    value={userData.message}
                  />
                </label>

                <button className="contact-submit-button">{loading ? (
              <>
                {" "}
                <i className="fas fa-spinner fa-spin"></i>
              </>
            ) : (
              "Send"
            )}{" "}</button>
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
