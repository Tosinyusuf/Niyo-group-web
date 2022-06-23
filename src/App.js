import HeroSection from "./components/HeroSection";
import VisionSection from "./components/VisionSection";
import OurNumbers from "./components/OurNumbers";
import Mission from "./components/Mission";
import Brands from "./components/Brands";
import Empowered from "./components/Empowered";
import Industries from "./components/Industries";
import OurClients from "./components/OurClients";

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
      <Empowered />
      <Industries />
      <OurClients />
   </>
  );
}

export default App;


