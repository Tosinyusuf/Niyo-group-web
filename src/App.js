import GlobalStyle from "./styled/Global.styled";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home.js";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
