import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 This makes the scroll reset */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App
