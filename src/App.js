import { useState, useEffect } from "react";

import GlobalStyle from "./styled/Global.styled";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import CareersPage from "./pages/CareersPage";
import "antd/dist/antd.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import FrontendDeveloper from "./pages/Careers/FrontendDeveloper";
import GrowthMarketer from "./pages/Careers/GrowthMarketer";
import ContentMarketer from "./pages/Careers/ContentMarketer";

console.log(getCookieConsentValue());

function App() {
  const [loading, setLoading] = useState(true);
 
 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <GlobalStyle />
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/contact-us" element={<ContactUs />}></Route>
              <Route exact path="about-us" element={<AboutUs />}></Route>
              <Route exact path="careers" element={<CareersPage />}></Route>
              <Route exact path="/careers/frontend-developer" element={<FrontendDeveloper />}></Route>
              <Route exact path="/careers/growth-marketer" element={<GrowthMarketer />}></Route>
              <Route exact path="/careers/content-marketer" element={<ContentMarketer />}></Route>
            </Routes>
            <Footer />
          </Router>
          <CookieConsent debug={true}>
            This site uses cookies
          </CookieConsent>
        </>
      )}
    </>
  );
}

export default App;
