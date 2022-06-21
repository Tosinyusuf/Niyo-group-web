import HeroSection from "./components/HeroSection";
import OurNumbers from "./components/OurNumbers";
import VisionSection from "./components/VisionSection";
import GlobalStyle from "./styled/Global.styled";

function App() {
  return (
   <>
   <GlobalStyle />
      <HeroSection />
      <VisionSection />
      <OurNumbers />
   </>
  );
}

export default App;
