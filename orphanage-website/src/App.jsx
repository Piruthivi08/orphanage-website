import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BabyAssistant from "./components/BabyAssistant";
import Home from "./pages/Home";
import About from "./pages/About";
import Kids from "./pages/Kids";
import HowToHelp from "./pages/Help";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; 

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <div className="p-0"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/help" element={<HowToHelp  />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <BabyAssistant />
    </Router>
  );
}
