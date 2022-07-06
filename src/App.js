import GlobalStyle from "./styled/Global.styled";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import CareersPage from "./pages/CareersPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="about-us" element={<AboutUs />}></Route>
          <Route exact path="careers-page" element={<CareersPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
