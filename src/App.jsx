// import { About } from "./Components";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Skill from "./Components/Skill/Skill";
import Testimonial from "./Components/Testimonial/Testimonial";
import Work from "./Components/Work/Work";
import useLocalizeDocumentAttributes from "./shared/hooks/useLocalizeDocumentAttributes";
import Footer from "./shared/Navigation/Footer";
import Navbar from "./shared/Navigation/NavBar";
// import useSetWebsiteHeader from "./shared/hooks/useSetWebsiteHeader";

// import './App.css'

function App() {
  // useSetWebsiteHeader();
  useLocalizeDocumentAttributes();

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
