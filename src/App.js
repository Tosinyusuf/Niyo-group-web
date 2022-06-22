import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import OurNumbers from "./components/OurNumbers";
import Mission from "./components/Mission";
import Brands from "./components/Brands";

import GlobalStyle from "./styled/Global.styled";

function App() {
  return (
   <>
   <GlobalStyle />
      <HeroSection />
      <VisionSection />
      <OurNumbers />
      <Mission />
      <Brands />
   </>
  );
}

export default App;


