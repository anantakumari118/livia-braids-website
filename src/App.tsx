import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import GalleryPage from "./pages/Gallery";
import AboutPage from "./pages/About";
import VisitPage from "./pages/Visit";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* leave some space for fixed navbar */}
      <main className="pt-20 bg-black text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
